🤖 Chatbot Backend con Claude AI

Backend de chatbot inteligente desarrollado con Node.js y Express, que utiliza la API de Claude (Anthropic) para generar respuestas conversacionales con contexto.

---

🚀 Características

- 🧠 Conversación con memoria por usuario
- 🤖 Integración con IA (Claude 3 Haiku)
- ⚡ API REST rápida y ligera con Express
- 🔐 Validaciones básicas de entrada
- 🧩 Arquitectura modular (controllers, services, utils)


---

⚙️ Instalación

1. Clona el repositorio:

git clone https://github.com/tu-usuario/chatbot.git
cd chatbot

2. Instala dependencias:

npm install

3. Crea un archivo ".env" en la raíz:

ANTHROPIC_API_KEY=tu_api_key_aqui

---

▶️ Uso

Inicia el servidor:

node server.js

Servidor corriendo en:

http://localhost:3001

---

📡 Endpoints

GET /

Verifica que el servidor esté activo.

Respuesta:

Backend PRO funcionando 🚀

---

POST /chat

Envía un mensaje al chatbot.

Body:

{
  "message": "Hola",
  "userId": "123"
}

Respuesta:

{
  "reply": "Hola, ¿en qué puedo ayudarte?"
}

---

🧠 Cómo funciona

1. El usuario envía un mensaje
2. Se guarda en memoria (por userId)
3. Se obtiene el historial de conversación
4. Se envía a Claude AI
5. Se devuelve la respuesta generada
6. Se guarda la respuesta en memoria

---

⚠️ Limitaciones actuales

- ❌ La memoria es temporal (se pierde al reiniciar el servidor)
- ❌ No hay autenticación de usuarios
- ❌ No hay persistencia en base de datos
- ❌ Sin control de rate limiting

---

🛠️ Tecnologías

- Node.js
- Express
- Claude AI (Anthropic API)
- dotenv
- cors

---

🚀 Mejoras futuras

- 🔄 Persistencia con base de datos (MySQL o MongoDB)
- 🔐 Autenticación con JWT
- 📊 Logs y monitoreo
- 🌐 Integración con frontend
- ⚡ Rate limiting

---

👨‍💻 Autor

Desarrollado por Jorge Santamaría

---

📄 Licencia

ISC
