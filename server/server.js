import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import classifyRoute from "./routes/classify.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "LLM Personalization Engine Running"
    });
});

app.use("/api/classify", classifyRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});