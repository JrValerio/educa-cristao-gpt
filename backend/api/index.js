import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const port = 5000;

app.use(express.json()); // Suporte para JSON

// Endpoint para lidar com as perguntas do frontend
app.post('/api/perguntar', async (req, res) => {
  const { pergunta } = req.body;

  try {
    // Fazer a requisição para a OpenAI API
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'gpt-4',
      prompt: pergunta,
      max_tokens: 150,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Pegue a chave do .env
      }
    });

    // Retornar a resposta da OpenAI ao frontend
    const resposta = response.data.choices[0].text;
    res.json({ resposta });
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    res.status(500).json({ resposta: 'Erro ao obter resposta da IA.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
