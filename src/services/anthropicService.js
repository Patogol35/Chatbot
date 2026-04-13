import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function getClaudeResponse(messages) {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      messages,
      system: "Eres un asistente útil, claro y profesional.",
    });

    return response.content?.[0]?.text || "No pude responder eso.";
  } catch (error) {
    console.error("Error en Claude:", error);
    throw new Error("Error al generar respuesta");
  }
}
