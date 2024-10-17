import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

db.authenticate()
  .then(() => console.log("Conectado ao banco de dados com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

export default db;
