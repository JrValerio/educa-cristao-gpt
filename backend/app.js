import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import db from "./db/index.js";

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(
  cors({
    origin: "*", // Permitir todas as origens
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Suporte para JSON com limite de 10mb
app.use(express.json({ limit: "10mb" }));

// Conectar e sincronizar banco de dados
db.authenticate()
  .then(() => console.log("Conectado ao banco de dados com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

db.sync()
  .then(() => console.log("Banco de dados sincronizado com sucesso!"))
  .catch((err) => console.error("Erro ao sincronizar o banco:", err));

// Rotas da API
app.use("/api/chat", chatRoutes);

// Rota de healthcheck para Railway
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Redirecionar para o frontend hospedado na Vercel
app.get("/", (req, res) => {
  res.redirect("https://educa-cristao-gpt-eight.vercel.app/");
});

// Iniciar o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
