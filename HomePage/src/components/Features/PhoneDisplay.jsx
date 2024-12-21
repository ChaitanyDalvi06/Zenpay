import React from 'react';

export default function PhoneDisplay() {
  return (
    <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">Welcome back, Andy!</p>
            <h3 className="text-2xl font-bold mt-1">$20,884.99</h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex gap-2 mb-6">
          <button className="flex-1 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Send</button>
          <button className="flex-1 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Request</button>
        </div>
        <div className="bg-primary text-white p-4 rounded-2xl">
          <div className="text-sm opacity-80 mb-4">PREMIUM CARD</div>
          <div className="text-lg">1299 9320 2994 2145</div>
        </div>
      </div>
    </div>
  );
}