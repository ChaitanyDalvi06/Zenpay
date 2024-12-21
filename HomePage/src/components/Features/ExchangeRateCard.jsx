import React from 'react';
import Card from '../ui/Card';

export default function ExchangeRateCard() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg w-64">
      <h3 className="text-sm font-medium mb-2">Exchange Rate</h3>
      <div className="text-sm mb-1">1 USD = 14.685 IDR</div>
      <div className="h-24">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="text-primary" width="100%" height="50">
              <path d="M0,25 Q50,5 100,25 T200,25" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-center">
        International<br />Money Transfer
      </div>
    </div>
  );
}