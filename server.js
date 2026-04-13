import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = 3001;

console.log(
  "API KEY cargada:",
  process.env.ANTHROPIC_API_KEY ? "✅ Sí" : "❌ No"
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
