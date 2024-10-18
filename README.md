## **EducaCristão GPT**

![Screenshot EducaCristão](https://github.com/JrValerio/educa-cristao-gpt/blob/main/public/assets/images/Screenshot%20EducaCrist%C3%A3o.png)

**EducaCristão GPT** é uma aplicação web que utiliza Inteligência Artificial (IA) para fornecer respostas teológicas e bíblicas. O projeto tem como objetivo auxiliar professores de Escola Bíblica Dominical (EBD), pastores, estudantes de teologia e novos convertidos a encontrar respostas rápidas e precisas sobre a Bíblia e doutrinas cristãs, facilitando o estudo e aprimorando o conhecimento teológico.

---

### 🌐 **Links do Projeto**
- **Frontend**: [EducaCristão GPT - Vercel](https://educa-cristao-gpt-eight.vercel.app/)
- **Backend**: [EducaCristão GPT - Render](https://educa-cristao-gpt.onrender.com)
- **Repositório no GitHub**: [JrValerio/educa-cristao-gpt](https://github.com/JrValerio/educa-cristao-gpt)
- **LinkedIn**: [Perfil do Desenvolvedor](https://www.linkedin.com/in/jrvalerio/)

---

## **Funcionalidades**
- **Chat com IA GPT**: Permite o envio de perguntas teológicas e bíblicas e fornece respostas elaboradas pela IA (utilizando o modelo GPT da OpenAI).
- **Interface Intuitiva**: Layout simples e responsivo, otimizado para diferentes dispositivos.
- **Integração com API OpenAI**: Utiliza o modelo GPT-4 para processar perguntas e fornecer respostas.
- **Conexão com Banco de Dados**: Armazena as interações no banco de dados PostgreSQL para referência futura.

---

## **Tecnologias Utilizadas**
### **Frontend**
- **Next.js**: Framework React para renderização do lado do servidor e otimização.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **Vercel**: Plataforma de hospedagem e deploy do frontend.

### **Backend**
- **Express.js**: Framework para construção da API REST.
- **PostgreSQL**: Banco de dados relacional hospedado no Render.
- **Sequelize**: ORM para modelagem e interação com o banco de dados.
- **Render**: Plataforma de hospedagem do backend.
- **OpenAI API**: Utiliza o modelo GPT-4 para processar as perguntas.

---

## **Como Executar o Projeto Localmente**

### **Pré-requisitos**
- **Node.js** instalado (versão 14 ou superior).
- **PostgreSQL** instalado e configurado.
- **Conta na OpenAI** para obter a chave da API.

### **Passos para rodar o projeto**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/JrValerio/educa-cristao-gpt.git
   cd educa-cristao-gpt
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configuração do Backend:**
   - Renomeie o arquivo `.env.example` para `.env`.
   - Preencha as seguintes variáveis no `.env`:

     ```
     OPENAI_API_KEY=<sua-chave-da-openai>
     DATABASE_URL=<sua-url-do-banco-postgresql>
     FRONTEND_URL=http://localhost:3000
     PORT=3001
     ```

4. **Configuração do Frontend:**
   - No diretório principal, adicione no `.env.local`:

     ```
     NEXT_PUBLIC_API_URL=http://localhost:3001
     ```

5. **Execute o backend:**

   ```bash
   cd backend
   npm run dev
   ```

6. **Execute o frontend:**

   ```bash
   npm run dev
   ```

7. **Acesse a aplicação:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001/api/chat/perguntar](http://localhost:3001/api/chat/perguntar)

---

## **Deploy**
- **Frontend**: O frontend está hospedado no **Vercel**.
- **Backend**: O backend está hospedado no **Render**.
- **Banco de Dados**: O PostgreSQL está hospedado no **Render**.

---

## **Contato**
- **Desenvolvedor**: [Júnior Valério](https://www.linkedin.com/in/jrvalerio/)

---

## **Próximos Passos**
- Implementar autenticação de usuários.
- Adicionar funcionalidades de esboço de sermões e estudos.
- Melhorar a interface para dispositivos móveis.
- Adicionar sugestões automáticas de leitura bíblica.

---

## **Conclusão**
O **EducaCristão GPT** é uma solução prática e eficiente para quem busca respostas rápidas e precisas sobre a Bíblia e teologia. Com a integração do GPT-4, ele oferece uma experiência enriquecedora para estudantes, pastores e novos convertidos.