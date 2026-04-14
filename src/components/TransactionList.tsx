import React from 'react';
import { Transaction } from '../types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { format, parseISO } from 'date-fns';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="font-medium">
                {format(parseISO(t.date), 'dd MMM yyyy')}
              </TableCell>
              <TableCell>
                <Badge variant={t.type === 'Income' ? 'default' : 'secondary'}>
                  {t.category}
                </Badge>
              </TableCell>
              <TableCell className="max-w-[200px] truncate">{t.description}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{t.paymentMethod}</TableCell>
              <TableCell className={`text-right font-bold ${t.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                {t.type === 'Income' ? '+' : '-'}₹{t.amount.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
