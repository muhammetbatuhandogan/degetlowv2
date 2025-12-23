
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || '' });

export const getTrainerAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are De Get Low, a world-class AI Personal Trainer for home workouts. 
        Provide professional, encouraging, and science-based fitness advice. 
        Focus on bodyweight exercises and correcting posture. 
        Keep responses concise and energetic.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a small technical glitch, but keep pushing! How else can I help with your form today?";
  }
};

export const analyzeFormPrompt = (exercise: string) => {
  return `Analyze my ${exercise} form. What are the top 3 critical mistakes to avoid for safety?`;
};
