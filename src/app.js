import express from "express";
import cors from "cors";
import { chatHandler } from "./controllers/chatController.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.post("/chat", chatHandler);

export default app;
