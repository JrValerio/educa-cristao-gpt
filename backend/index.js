import OpenAI from 'openai';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do .env
dotenv.config();

// Inicializa o cliente OpenAI com as credenciais
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
    
});

console.log('API Key:', process.env.OPENAI_API_KEY); // Verifique se a chave é exibida corretamente
console.log('Organization:', process.env.OPENAI_ORGANIZATION);

async function gerarHaiku() {
    try {
        // Faz uma solicitação para criar uma conclusão usando o gpt-4o-mini
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Alteração aqui para o modelo disponível
            messages: [
                { role: 'user', content: 'Write a haiku about AI' }
            ],
        });

        // Exibe a resposta gerada
        console.log('Resposta da IA:', completion.choices[0].message.content.trim());
    } catch (error) {
        console.error('Erro na API OpenAI:', error.response?.data || error.message);
    }
}


// Chama a função
gerarHaiku();
