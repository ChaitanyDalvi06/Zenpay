import React from 'react';
import { CreditCard, TrendingUp, PiggyBank, PieChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatDate } from '../../utils/formatters';
import SpendingCategory from '../../components/spending/SpendingCategory';
import './Dashboard.css'; // Import the CSS file 
import TransactionHistory from '../../components/TransactionHistory';

// Mock data
const mockData = [
  { month: 'Jan', expenses: 4000 },
  { month: 'Feb', expenses: 3000 },
  { month: 'Mar', expenses: 5000 },
  { month: 'Apr', expenses: 2780 },
  { month: 'May', expenses: 1890 },
  { month: 'Jun', expenses: 2390 },
];

// const mockTransactions = [
//   {
//     id: '1',
//     amount: 2500,
//     merchant: 'Amazon',
//     category: 'Shopping',
//     date: '2024-03-15',
//     status: 'completed',
//   },
//   {
//     id: '2',
//     amount: 1200,
//     merchant: 'Swiggy',
//     category: 'Food',
//     date: '2024-03-14',
//     status: 'completed',
//   },
//   // Add more mock transactions as needed
// ];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Available Credit"
          value="₹50,000"
          icon={<CreditCard className="w-8 h-8 text-indigo-600" />}
        />
        <StatCard
          title="Monthly Spending"
          value="₹15,000"
          icon={<TrendingUp className="w-8 h-8 text-green-600" />}
        />
        <StatCard
          title="Investment Potential"
          value="₹10,000"
          icon={<PiggyBank className="w-8 h-8 text-purple-600" />}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Expense Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="expenses" stroke="#4f46e5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Spending Analysis Box */}
      <div className="spending-analysis">
        <h3 className="spending-analysis-title">
          <PieChart className="w-5 h-5 mr-2 text-purple-600" />
          Spending Analysis
        </h3>
        <div className="space-y-4">
          <SpendingCategory category="Food & Dining" amount="₹5,000" percentage="33%" />
          <SpendingCategory category="Shopping" amount="₹4,000" percentage="27%" />
          <SpendingCategory category="Transportation" amount="₹3,000" percentage="20%" />
          <SpendingCategory category="Entertainment" amount="₹3,000" percentage="20%" />
        </div>
      </div>

      {
        <TransactionHistory />
      }
      {/* <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{formatDate(transaction.date)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.merchant}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(transaction.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div>
        <p className="stat-card-title">{title}</p>
        <p className="stat-card-value">{value}</p>
      </div>
      {icon}
    </div>
  );
}

export default Dashboard;
