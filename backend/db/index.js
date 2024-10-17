import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do .env

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Evita logs SQL no console
});

// Testar a conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

export default db;
