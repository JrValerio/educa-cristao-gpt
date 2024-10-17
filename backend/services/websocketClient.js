import WebSocket from "ws";
import dotenv from "dotenv";

dotenv.config();

const url =
  "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01";

const ws = new WebSocket(url, {
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "OpenAI-Beta": "realtime=v1",
    "OpenAI-Organization": process.env.OPENAI_ORGANIZATION,
  },
});

ws.on("open", () => {
  console.log("Conectado ao servidor OpenAI Realtime.");

  const mensagemInicial = {
    type: "conversation.item.create",
    item: {
      type: "message",
      role: "user",
      content: [{ type: "input_text", text: "Olá! O que é fé?" }],
    },
  };

  ws.send(JSON.stringify(mensagemInicial));
  console.log("Mensagem enviada:", mensagemInicial);
});

ws.on("message", (message) => {
  const data = JSON.parse(message.toString());
  console.log("Mensagem recebida:", data);
});

ws.on("error", (err) => {
  console.error("Erro na conexão WebSocket:", err);
});

ws.on("close", () => {
  console.log("Conexão com o servidor encerrada. Tentando reconectar...");
  setTimeout(() => {
    ws.reconnect();
  }, 3000);
});
