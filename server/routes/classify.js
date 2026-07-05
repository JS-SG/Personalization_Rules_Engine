import express from "express";
import { classifySession } from "../services/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { events } = req.body;

    if (!events || !Array.isArray(events)) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of events."
      });
    }

    const result = await classifySession(events);

    res.json({
      success: true,
      result
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to classify session.",
      error: error.message
    });
  }
});

export default router;