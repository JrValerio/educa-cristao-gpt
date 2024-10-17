import React from "react";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao EducaCristão!</h1>
      <p className="mb-4">
        Sua plataforma de ensino teológico e estudos bíblicos.
      </p>
      <a
        href="/chat"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
      >
        Iniciar Chat
      </a>
    </div>
  );
}
