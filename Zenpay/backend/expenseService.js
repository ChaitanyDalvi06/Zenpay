import axios from 'axios';
import dotenv from 'dotenv';
const API_URL = process.env.VITE_API_URL;



export async function addExpense(expense) {
  const response = await axios.post(`${API_URL}/expenses`, expense);
  return response.data;
}

export async function getExpenses(filters) {
  const response = await axios.get(`${API_URL}/expenses`, { params: filters });
  return response.data;
}

export async function getExpensesByCategory(startDate, endDate) {
  const response = await axios.get(`${API_URL}/expenses/by-category`, {
    params: { startDate, endDate }
  });
  return response.data;
}

export async function updateExpenseCategory(expenseId, category) {
  const response = await axios.patch(`${API_URL}/expenses/${expenseId}`, { category });
  return response.data;
}
