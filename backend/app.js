import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import db from "./db/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "10mb" }));

db.authenticate()
  .then(() => console.log("Conectado ao banco de dados com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

db.sync()
  .then(() => console.log("Banco de dados sincronizado com sucesso!"))
  .catch((err) => console.error("Erro ao sincronizar o banco:", err));

app.use("/api/chat", chatRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Educa Cristão Backend rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (_, res) => {
  res.redirect("https://educa-cristao-gpt-eight.vercel.app/");
});


