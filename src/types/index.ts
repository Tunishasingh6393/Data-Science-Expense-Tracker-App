export type Category = 'Food' | 'Transport' | 'Rent' | 'Utilities' | 'Entertainment' | 'Healthcare' | 'Shopping' | 'Salary' | 'Investment' | 'Others';

export type TransactionType = 'Income' | 'Expense';

export interface Transaction {
  id: string;
  date: string;
  category: Category;
  description: string;
  amount: number;
  type: TransactionType;
  paymentMethod: 'Cash' | 'Credit Card' | 'Debit Card' | 'UPI' | 'Bank Transfer';
}

export interface MonthlySummary {
  month: string;
  income: number;
  expense: number;
  savings: number;
}

export interface CategorySummary {
  category: Category;
  amount: number;
  percentage: number;
}
