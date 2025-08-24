📌 Proyecto: Tareitas pero Inteligentes 🧠✅

Este proyecto es un CRUD de tareas integrado con IA (Gemini) desarrollado en Node.js + React/Vite.
Permite crear, editar, marcar como completadas y eliminar tareas, además de obtener consejos de una IA sobre cómo organizar mejor tu lista.

=================================
⚙️ Requisitos previos ️️️️️⚙️

Tener instalado Node.js (v18 o superior).
Tener una API Key de Gemini (Google AI Studio).

=================================

✅ Instalación y ejecución ✅

Instalar dependencias: 

npm install

npm install @google/genai

=================================

⚙️ Configurar las variables de entorno ⚙️

Crea un archivo .env en la raíz del proyecto con lo siguiente:
VITE_GEMINI_KEY=tu_api_key_de_gemini

=================================

⚙️ Configuración del Backend ⚙️

Entra en la carpeta del backend: cd backend

Instala dependencias: npm install

Inicia el servidor backend: node index.js

Por defecto correrá en: http://localhost:4000

=================================

⚙️ Configuración del Frontend ⚙️

Entra en la carpeta del frontend: cd ../frontend

Instala dependencias: npm install

npm install @google/genai (Por asi acaso)


Crea un archivo .env en frontend/ con: VITE_GEMINI_KEY=La_key_de gemini


Inicia el servidor frontend: npm run dev


Por defecto correrá en: http://localhost:5173

=================================

Funcionalidades

➕ Añadir tareas
✏️ Editar tareas
✅ Marcar como completadas
🗑️ Eliminar tareas
🤖 Obtener insights de IA (el backend consulta a Gemini y devuelve consejos)