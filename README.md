# ExpenseInsight DS: Data Science Expense Tracker

An industry-oriented project designed for Data Analysts, Business Analysts, and Financial Analysts to track, categorize, and visualize financial data using Data Science principles.

## 📌 Project Overview
- **Objective**: Build a data-driven application to enable better financial decision-making through insights.
- **Industry Relevance**: Key feature in FinTech (Google Pay, CRED, Mint).
- **Target Roles**: Data Analyst, Business Analyst, Financial Analyst.

## 🚀 Features
- **Synthetic Data Engine**: Generates 90 days of realistic financial transactions.
- **Interactive Dashboard**: Visualizes Income vs. Expenses, Category Distribution, and Savings Trends.
- **AI Financial Advisor**: Uses Gemini AI to provide personalized spending insights.
- **Data Science Workflow**: Demonstrates Cleaning, EDA, and Feature Engineering.
- **Responsive UI**: Built with React, Tailwind CSS, and Shadcn UI.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Recharts, Lucide Icons.
- **Analysis**: TypeScript (Web), Python/Pandas (Data Science Script).
- **AI**: Google Gemini API.
- **Deployment**: Vercel/Cloud Run.

## 📂 Project Structure
- `src/lib/syntheticData.ts`: Data generation logic.
- `src/components/Dashboard.tsx`: Visualization layer.
- `src/services/geminiService.ts`: AI integration.
- `expense_tracker_ds.py`: Standalone Python implementation for GitHub.

## 📖 How to Run
1. **Clone the repo**: `git clone <repo-url>`
2. **Install dependencies**: `npm install`
3. **Set Environment Variables**: Add `GEMINI_API_KEY` to your `.env`.
4. **Run the app**: `npm run dev`

## 📊 Data Science Workflow
1. **Collection**: Synthetic generation of 100+ transactions.
2. **Cleaning**: Standardizing categories and handling date formats.
3. **EDA**: Grouping by month/category to find patterns.
4. **Visualization**: Communicating findings through charts.

## 🤝 Interview Preparation
- **Q**: How did you handle missing data?
- **A**: Used Pandas `.dropna()` for critical fields and `.fillna()` for optional descriptions.
- **Q**: Why use synthetic data?
- **A**: To demonstrate the pipeline without compromising personal PII (Personally Identifiable Information).

---
Built with ❤️ for Placement Portfolios.
