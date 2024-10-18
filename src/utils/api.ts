import axios from "axios";

const api = axios.create({
	baseURL: "https://educa-cristao-gpt.onrender.com",
	headers: {
		"Content-Type": "application/json",
	},
});

console.log(process.env.NEXT_PUBLIC_API_URL);


export const enviarPergunta = async (pergunta: string) => {
	try {
		const response = await api.post("/api/chat/perguntar", { pergunta });
		return response.data.resposta;
	} catch (error) {
		console.error("Erro ao enviar pergunta:", error);
		throw new Error("Erro ao obter resposta da IA.");
	}
};
