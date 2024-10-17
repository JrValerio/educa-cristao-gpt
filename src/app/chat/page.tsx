// src/app/chat/page.tsx
"use client";

import type React from "react";
import ChatBox from "../../components/ChatBox";

const ChatPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">EducaCristão - Chat com IA</h1>
      <ChatBox />
    </div>
  );
};

export default ChatPage;
