import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { buildPrompt } from "./prompt.js";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function classifySession(events) {

  const prompt = buildPrompt(events);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });

  let text = response.text;

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
}