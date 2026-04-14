import React, { useState, useEffect } from 'react';
import { generateSyntheticData } from './lib/syntheticData';
import { Transaction } from './types';
import { Dashboard } from './components/Dashboard';
import { TransactionList } from './components/TransactionList';
import { AIInsights } from './components/AIInsights';
import { DataScienceView } from './components/DataScienceView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Wallet, LayoutDashboard, ListOrdered, BrainCircuit, GraduationCap, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate data loading
    const data = generateSyntheticData(90);
    setTransactions(data);
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-600 font-medium">Initializing Financial Engine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              ExpenseInsight <span className="text-indigo-600">DS</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                SN
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:inline-block">Nivedita S.</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Welcome Section */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">Financial Intelligence Dashboard</h2>
            <p className="text-slate-500 mt-1">Data-driven insights for smarter spending and wealth management.</p>
          </section>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mb-8">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="transactions" className="flex items-center gap-2">
                <ListOrdered className="w-4 h-4" />
                Transactions
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" />
                AI Advisor
              </TabsTrigger>
              <TabsTrigger value="datascience" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                DS Workflow
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-8">
              <Dashboard transactions={transactions} />
            </TabsContent>

            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>A detailed log of all synthetic financial activities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionList transactions={transactions} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <AIInsights transactions={transactions} />
            </TabsContent>

            <TabsContent value="datascience">
              <DataScienceView />
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t text-center text-slate-500 text-sm">
        <p>© 2026 ExpenseInsight DS • Built for Placement Portfolio • Data Science & Fintech Project</p>
      </footer>
    </div>
  );
}
