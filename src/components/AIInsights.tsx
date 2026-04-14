import React, { useState, useEffect } from 'react';
import { Transaction } from '../types';
import { getFinancialInsights } from '../services/geminiService';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AIInsightsProps {
  transactions: Transaction[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ transactions }) => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    setLoading(true);
    const result = await getFinancialInsights(transactions);
    setInsights(result);
    setLoading(false);
  };

  return (
    <Card className="border-indigo-200 bg-indigo-50/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <BrainCircuit className="w-24 h-24 text-indigo-500" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-indigo-700">
          <Sparkles className="w-5 h-5" />
          AI Financial Advisor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!insights && !loading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Get personalized insights based on your spending patterns.</p>
            <Button onClick={generateInsights} className="bg-indigo-600 hover:bg-indigo-700">
              Generate Insights
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
            <p className="text-sm text-indigo-600 font-medium animate-pulse">Analyzing your financial behavior...</p>
          </div>
        )}

        {insights && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-indigo max-w-none"
          >
            <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
              {insights}
            </div>
            <Button 
              variant="outline" 
              onClick={generateInsights} 
              className="mt-6 border-indigo-200 text-indigo-600 hover:bg-indigo-100"
              disabled={loading}
            >
              Refresh Insights
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};
