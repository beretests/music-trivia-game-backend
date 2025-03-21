import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5080;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to Music Trivia Game API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
