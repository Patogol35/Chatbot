import { getClaudeResponse } from "../services/anthropicService.js";
import { addMessage, getConversation } from "../utils/memory.js";

export async function chatHandler(req, res) {
  try {
    const { message, userId = "default" } = req.body;

    // Validaciones
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Mensaje vacío" });
    }

    if (message.length > 500) {
      return res.status(400).json({ error: "Mensaje demasiado largo" });
    }

    // Obtener historial
    addMessage(userId, "user", message);
    const history = getConversation(userId);

    // Obtener respuesta IA
    const reply = await getClaudeResponse(history);

    // Guardar respuesta
    addMessage(userId, "assistant", reply);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error interno",
    });
  }
}
