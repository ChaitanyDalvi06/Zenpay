// User object structure
export const User = {
  id: '',
  name: '',
  email: '',
  creditLimit: 0,
  availableCredit: 0,
};

// Expense categories as constants
export const ExpenseCategory = {
  FOOD: 'Food & Dining',
  SHOPPING: 'Shopping',
  TRANSPORTATION: 'Transportation',
  ENTERTAINMENT: 'Entertainment',
  UTILITIES: 'Utilities',
  HEALTHCARE: 'Healthcare',
  EDUCATION: 'Education',
  OTHER: 'Other',
};

// Transaction object structure
export const Transaction = {
  id: '',
  amount: 0,
  merchant: '',
  category: ExpenseCategory.FOOD, // Default category, can be replaced with any other category
  date: '',
  status: 'completed', // default status can be 'completed', 'pending', or 'failed'
  description: '',
  paymentMethod: {
    type: 'credit', // or 'debit'
    last4: '',
  },
};

// SpendingData object structure
export const SpendingData = {
  category: ExpenseCategory.FOOD, // Default category
  amount: 0,
  percentage: 0,
};

// PaymentMethod object structure
export const PaymentMethod = {
  id: '',
  type: 'credit', // or 'debit'
  last4: '',
  expiryMonth: 0,
  expiryYear: 0,
  brand: '',
};
