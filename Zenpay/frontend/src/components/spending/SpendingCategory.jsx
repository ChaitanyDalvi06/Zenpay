import React from 'react';

function SpendingCategory({ category, amount, percentage }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{category}</p>
        <p className="text-sm text-gray-600">{amount}</p>
      </div>
      <div className="w-24 bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}

export default SpendingCategory;
