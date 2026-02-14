
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getArchitecturalAnalysis = async (title: string, subtitle: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a high-end, sophisticated architectural description for a design piece titled "${title}" with the theme "${subtitle}". Keep it poetic, minimalist, and professional. Max 3 sentences.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "A masterpiece of modern design, blending form and function in perfect harmony.";
  } catch (error) {
    console.error("Failed to fetch analysis:", error);
    return "Exploring the boundaries of contemporary architecture through innovative materials and lighting.";
  }
};
