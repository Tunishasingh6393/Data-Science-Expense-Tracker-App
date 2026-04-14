import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Database, BarChart3, PieChart, TrendingUp, BrainCircuit, FileCode } from 'lucide-react';

export const DataScienceView: React.FC = () => {
  const phases = [
    {
      title: "Phase 1: Data Collection",
      icon: <Database className="w-5 h-5 text-blue-500" />,
      description: "Generating synthetic financial datasets using NumPy and Pandas to simulate real-world transaction logs.",
      details: "Includes: Date, Category, Amount, Payment Method, and Transaction Type."
    },
    {
      title: "Phase 2: Data Cleaning",
      icon: <FileCode className="w-5 h-5 text-green-500" />,
      description: "Handling missing values, standardizing category names, and converting data types for analysis.",
      details: "Techniques: .dropna(), .fillna(), .to_datetime(), .str.strip()."
    },
    {
      title: "Phase 3: Exploratory Data Analysis (EDA)",
      icon: <BarChart3 className="w-5 h-5 text-purple-500" />,
      description: "Uncovering spending patterns and trends through statistical summaries and group-by operations.",
      details: "Metrics: Mean monthly spend, Category-wise distribution, Savings rate."
    },
    {
      title: "Phase 4: Data Visualization",
      icon: <PieChart className="w-5 h-5 text-orange-500" />,
      description: "Creating intuitive charts (Bar, Pie, Line) to communicate financial insights effectively.",
      details: "Tools: Matplotlib, Seaborn, Recharts (for Web)."
    },
    {
      title: "Phase 5: Feature Engineering",
      icon: <TrendingUp className="w-5 h-5 text-red-500" />,
      description: "Deriving new insights like 'Weekday vs Weekend' spending or 'Fixed vs Variable' costs.",
      details: "New Features: Month, Day of Week, Is Weekend, Spending Intensity."
    },
    {
      title: "Phase 6: AI Insights",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-500" />,
      description: "Using LLMs (Gemini) to provide personalized financial advice based on the analyzed data.",
      details: "Method: Prompt Engineering with summarized financial metrics."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phases.map((phase, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-3 pb-2">
              {phase.icon}
              <CardTitle className="text-lg">{phase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
              <div className="bg-muted p-2 rounded text-xs font-mono">
                {phase.details}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-900 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-6 h-6" />
            Python Data Science Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-xs overflow-x-auto p-4 bg-slate-800 rounded-lg text-green-400">
{`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Load Data
df = pd.read_csv('expenses.csv')

# 2. Clean Data
df['Date'] = pd.to_datetime(df['Date'])
df['Amount'] = pd.to_numeric(df['Amount'])
df['Category'] = df['Category'].str.title()

# 3. Analyze
monthly_spend = df.groupby(df['Date'].dt.month)['Amount'].sum()

# 4. Visualize
sns.barplot(x=monthly_spend.index, y=monthly_spend.values)
plt.title('Monthly Spending Trend')
plt.show()`}
          </pre>
          <p className="mt-4 text-sm text-slate-400">
            This project follows industry standards for Data Analysis roles at companies like Google, Razorpay, and CRED.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
