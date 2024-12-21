import { useQuery, gql } from '@apollo/client';
import { formatCurrency } from "../utils/formatters";

const GET_PAYMENTS = gql`
    query GetPayments {
        GetPayments {
            payeeName
            amount
            status
        }
    }
`;

function TransactionHistory() {
    const { data, loading, error } = useQuery(GET_PAYMENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const transactions = data.GetPayments;
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payee Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.payeeName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(transaction.amount)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                        ${transaction.status === 'successful' ? 'bg-green-100 text-green-800' :
                                            transaction.status === 'failed' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'}`}>
                                        {transaction.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionHistory;