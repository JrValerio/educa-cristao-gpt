"use client";

import { useState } from "react";
import { enviarPergunta } from "../utils/api";
import ReactMarkdown from "react-markdown";

const ChatBox: React.FC = () => {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setResposta("");

    try {
      const respostaDaIa = await enviarPergunta(pergunta);
      setResposta(respostaDaIa);
    } catch (error) {
      console.error("Erro ao obter resposta da IA:", error);
      setResposta("Erro ao obter resposta da IA.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Digite sua pergunta"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={carregando}
        >
          {carregando ? "Carregando..." : "Enviar"}
        </button>
      </form>

      {resposta && (
        <div className="mt-4 p-4 border rounded bg-gray-100 max-h-screen overflow-y-auto">
          <h2>Resposta:</h2>
          <ReactMarkdown className="marckdown">{resposta}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
