import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

export const enviarPergunta = async (pergunta: string): Promise<string> => {
	try {
		const response = await api.post("/api/chat/perguntar", { pergunta });
		return response.data.resposta;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.error("Erro ao enviar pergunta:", error.response || error);

			// Tratamento mais específico para erro na API
			if (error.response) {
				const { status, data } = error.response;
				throw new Error(
					`Erro ${status}: ${data?.message || "Erro ao obter resposta da IA."}`
				);
			}
		} else {
			console.error("Erro ao enviar pergunta:", error);
		}
		throw new Error("Erro ao se comunicar com o servidor.");
	}
};