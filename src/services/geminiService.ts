import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getFinancialInsights(transactions: Transaction[]) {
  if (!process.env.GEMINI_API_KEY) {
    return "AI Insights are currently unavailable. Please configure your Gemini API key.";
  }

  try {
    // Summarize data for the prompt
    const totalExpense = transactions
      .filter(t => t.type === 'Expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalIncome = transactions
      .filter(t => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);

    const categoryBreakdown = transactions
      .filter(t => t.type === 'Expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);

    const prompt = `
      You are a professional Financial Analyst. Analyze the following monthly expense data and provide 3-4 concise, actionable insights for better financial health.
      
      Summary:
      - Total Income: ₹${totalIncome}
      - Total Expenses: ₹${totalExpense}
      - Savings: ₹${totalIncome - totalExpense}
      
      Category Breakdown:
      ${Object.entries(categoryBreakdown).map(([cat, amt]) => `- ${cat}: ₹${amt}`).join('\n')}
      
      Provide insights on:
      1. Spending patterns
      2. Potential areas for saving
      3. Budgeting advice
      
      Keep it professional and encouraging.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text || "No insights generated.";
  } catch (error) {
    console.error("Error generating insights:", error);
    return "Failed to generate AI insights. Please try again later.";
  }
}
