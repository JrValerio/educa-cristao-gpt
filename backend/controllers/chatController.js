import Interaction from '../models/interactionModel.js';
import axios from 'axios';

export const obterResposta = async (req, res) => {
  const { pergunta } = req.body;

  try {
    let respostaCompleta = ''; 
    let continuar = true;

    console.log(`Pergunta recebida: ${pergunta}`);

    while (continuar) {
      console.log('Fazendo chamada para a API OpenAI...');

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini', // Altere para 'gpt-4' se permitido
          messages: [{ role: 'user', content: pergunta }],
          max_tokens: 1000,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
            'OpenAI-Organization': process.env.OPENAI_ORGANIZATION,
          },
        }
      );

      const resposta = response.data.choices[0].message.content.trim();
      respostaCompleta += resposta;

      console.log('Resposta até o momento:', respostaCompleta);

      continuar = resposta.endsWith('...');
    }

    await Interaction.create({ pergunta, resposta: respostaCompleta });
    res.json({ resposta: respostaCompleta });
  } catch (error) {
    console.error('Erro na API da OpenAI:', error);
    res.status(500).json({
      mensagem: 'Erro ao obter resposta da IA.',
      detalhes: error.response?.data || error.message,
    });
  }
};
