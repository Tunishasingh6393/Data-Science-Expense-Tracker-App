"""
Expense Tracker App using Data Science
--------------------------------------
This script demonstrates the Data Science workflow for an Expense Tracker.
Includes: Synthetic Data Generation, Cleaning, EDA, and Visualization.
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# 1. SYNTHETIC DATA GENERATION
def generate_data(n_days=90):
    categories = ['Food', 'Transport', 'Rent', 'Utilities', 'Entertainment', 'Healthcare', 'Shopping', 'Others']
    data = []
    start_date = datetime.now() - timedelta(days=n_days)
    
    for i in range(n_days):
        current_date = start_date + timedelta(days=i)
        
        # Random number of transactions per day
        for _ in range(np.random.randint(1, 5)):
            category = np.random.choice(categories)
            amount = np.random.randint(50, 2000)
            data.append({
                'Date': current_date.strftime('%Y-%m-%d'),
                'Category': category,
                'Amount': amount,
                'Type': 'Expense',
                'Payment_Method': np.random.choice(['Cash', 'UPI', 'Card'])
            })
            
        # Add monthly income
        if current_date.day == 1:
            data.append({
                'Date': current_date.strftime('%Y-%m-%d'),
                'Category': 'Salary',
                'Amount': 50000,
                'Type': 'Income',
                'Payment_Method': 'Bank Transfer'
            })
            
    return pd.DataFrame(data)

# 2. DATA CLEANING & PREPROCESSING
def clean_data(df):
    # Convert types
    df['Date'] = pd.to_datetime(df['Date'])
    df['Amount'] = pd.to_numeric(df['Amount'])
    
    # Feature Engineering
    df['Month'] = df['Date'].dt.month_name()
    df['Day_of_Week'] = df['Date'].dt.day_name()
    df['Is_Weekend'] = df['Date'].dt.dayofweek.isin([5, 6])
    
    return df

# 3. EXPLORATORY DATA ANALYSIS (EDA)
def perform_eda(df):
    print("--- Dataset Overview ---")
    print(df.info())
    print("\n--- Summary Statistics ---")
    print(df.describe())
    
    # Category-wise spending
    expenses = df[df['Type'] == 'Expense']
    category_spend = expenses.groupby('Category')['Amount'].sum().sort_values(ascending=False)
    print("\n--- Top Spending Categories ---")
    print(category_spend)
    
    return category_spend

# 4. VISUALIZATION
def visualize_data(df):
    sns.set_theme(style="whitegrid")
    plt.figure(figsize=(15, 10))
    
    # Subplot 1: Category-wise Spending
    plt.subplot(2, 2, 1)
    expenses = df[df['Type'] == 'Expense']
    sns.barplot(data=expenses, x='Category', y='Amount', estimator=sum, palette='viridis')
    plt.title('Total Spending by Category')
    plt.xticks(rotation=45)
    
    # Subplot 2: Monthly Trends
    plt.subplot(2, 2, 2)
    monthly = df.groupby(['Month', 'Type'])['Amount'].sum().unstack()
    monthly.plot(kind='bar', ax=plt.gca())
    plt.title('Monthly Income vs Expense')
    
    # Subplot 3: Daily Spending Patterns
    plt.subplot(2, 2, 3)
    daily = expenses.groupby('Date')['Amount'].sum()
    daily.plot()
    plt.title('Daily Spending Trend')
    
    # Subplot 4: Weekend vs Weekday
    plt.subplot(2, 2, 4)
    sns.boxplot(data=expenses, x='Is_Weekend', y='Amount')
    plt.title('Spending Distribution: Weekend vs Weekday')
    
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    # Execute Workflow
    raw_df = generate_data()
    cleaned_df = clean_data(raw_df)
    perform_eda(cleaned_df)
    visualize_data(cleaned_df)
    print("\nAnalysis Complete. Visualizations generated.")
