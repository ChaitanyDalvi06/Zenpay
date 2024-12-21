import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';
import RecommendationCard from '../components/investment/RecommendationCard';
import { getInvestmentAdvice } from '../services/geminiService';

function AIAdvisor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchAdvice() {
      setLoading(true);
      setError(null);
      try {
        const monthlyExpenses = 15000;
        const savingsAmount = 10000;
        const advice = await getInvestmentAdvice(monthlyExpenses, savingsAmount);
        setRecommendations(advice);
      } catch (error) {
        setError('Failed to get AI recommendations. Please try again later.');
        console.error('Failed to get AI recommendations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Brain className="w-10 h-10 text-indigo-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">AI Investment Advisor</h1>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Investment Recommendations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                Array(6).fill(null).map((_, index) => (
                  <div key={index} className="animate-pulse bg-gray-100 rounded-lg p-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                ))
              ) : (
                recommendations.map((rec, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{rec.title}</h3>
                      <span className="text-indigo-600 font-medium">{rec.profitPercentage}</span>
                    </div>
                    <p className="text-gray-600">{rec.description}</p>
                    <p className="text-gray-600"><strong>Risk Factor:</strong> {rec.riskFactor}</p>
                    
                    <div className="mt-2">
                      <span className="text-gray-600">Profit Bar</span>
                    </div>
                    
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${rec.profitPercentage}` }}
                      ></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAdvisor;

