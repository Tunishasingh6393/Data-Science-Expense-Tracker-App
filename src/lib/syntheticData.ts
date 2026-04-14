import { Transaction, Category, TransactionType } from '../types';
import { subDays, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

const CATEGORIES: Category[] = ['Food', 'Transport', 'Rent', 'Utilities', 'Entertainment', 'Healthcare', 'Shopping', 'Others'];
const INCOME_CATEGORIES: Category[] = ['Salary', 'Investment'];
const PAYMENT_METHODS = ['Cash', 'Credit Card', 'Debit Card', 'UPI', 'Bank Transfer'] as const;

export function generateSyntheticData(days: number = 90): Transaction[] {
  const transactions: Transaction[] = [];
  const now = new Date();

  // Generate Salary for each month
  const months = Math.ceil(days / 30);
  for (let i = 0; i < months; i++) {
    const monthDate = subDays(now, i * 30);
    transactions.push({
      id: `salary-${i}`,
      date: format(startOfMonth(monthDate), 'yyyy-MM-dd'),
      category: 'Salary',
      description: 'Monthly Salary Credit',
      amount: 50000 + Math.random() * 10000,
      type: 'Income',
      paymentMethod: 'Bank Transfer',
    });

    // Rent and Utilities once a month
    transactions.push({
      id: `rent-${i}`,
      date: format(subDays(startOfMonth(monthDate), -2), 'yyyy-MM-dd'),
      category: 'Rent',
      description: 'Monthly House Rent',
      amount: 15000,
      type: 'Expense',
      paymentMethod: 'Bank Transfer',
    });

    transactions.push({
      id: `util-${i}`,
      date: format(subDays(startOfMonth(monthDate), -5), 'yyyy-MM-dd'),
      category: 'Utilities',
      description: 'Electricity & Water Bill',
      amount: 2000 + Math.random() * 1000,
      type: 'Expense',
      paymentMethod: 'UPI',
    });
  }

  // Generate daily random expenses
  for (let i = 0; i < days; i++) {
    const date = subDays(now, i);
    
    // Skip if it's a major bill day already handled (simplified)
    
    // 1-3 random expenses per day
    const numExpenses = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numExpenses; j++) {
      const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
      let amount = 0;
      
      switch(category) {
        case 'Food': amount = 100 + Math.random() * 500; break;
        case 'Transport': amount = 50 + Math.random() * 300; break;
        case 'Shopping': amount = 500 + Math.random() * 3000; break;
        case 'Entertainment': amount = 200 + Math.random() * 1000; break;
        default: amount = 100 + Math.random() * 1000;
      }

      transactions.push({
        id: `exp-${i}-${j}`,
        date: format(date, 'yyyy-MM-dd'),
        category,
        description: `${category} related expense`,
        amount: Math.round(amount),
        type: 'Expense',
        paymentMethod: PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)],
      });
    }
  }

  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
