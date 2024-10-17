import axios from "axios";

const api = axios.create({
	baseURL: "https://<seu-domínio>.railway.app",
	headers: {
		"Content-Type": "application/json",
	},
});

// Função para enviar uma pergunta ao backend
export const enviarPergunta = async (pergunta: string) => {
	try {
		const response = await api.post("/api/chat/perguntar", { pergunta });
		return response.data.resposta;
	} catch (error) {
		console.error("Erro ao enviar pergunta:", error);
		throw new Error("Erro ao obter resposta da IA.");
	}
};
