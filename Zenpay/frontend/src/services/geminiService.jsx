import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyBSHQBTpNCpZ8TWBeznClAsLMyCniSu7E8');

export async function getInvestmentAdvice(monthlyExpenses, savingsAmount) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Based on:
    - Monthly Expenses: ₹${monthlyExpenses}
    - Available for Investment: ₹${savingsAmount}

    Provide 6 unique investment recommendations in the following format:
    [
      {
        "title": "investment type",
        "description": "brief advice",
        "riskFactor": "XX%",
        "profitPercentage": "YY%"
      }
    ]

    Focus on a balanced portfolio suitable for beginners.
    Keep descriptions concise and practical.
    Ensure the percentages add up to 100%.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    
    // Extract JSON array from the response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }

    const recommendations = JSON.parse(jsonMatch[0]);

    // Validate the response structure
    if (!Array.isArray(recommendations) || !recommendations.every(isValidRecommendation)) {
      throw new Error('Invalid recommendation format');
    }

    // Ensure all recommendations are unique
    const uniqueRecommendations = Array.from(new Set(recommendations.map(rec => rec.title)))
      .map(title => recommendations.find(rec => rec.title === title));

    // Return only the first 6 unique recommendations
    return uniqueRecommendations.slice(0, 6);
  } catch (error) {
    console.error('Error getting investment advice:', error);
    return [];
  }
}

// Updated validation function
function isValidRecommendation(rec) {
  return (
    typeof rec === 'object' &&
    typeof rec.title === 'string' &&
    typeof rec.description === 'string' &&
    typeof rec.riskFactor === 'string' &&
    typeof rec.profitPercentage === 'string'
  );
}
