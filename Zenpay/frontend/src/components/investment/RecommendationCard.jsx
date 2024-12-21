import React from 'react';

function RecommendationCard({ title, description, percentage }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm text-indigo-600">{percentage}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default RecommendationCard;
