import React from 'react';
import Button from '../ui/Button';

export default function WithdrawCard() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg w-64">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Withdraw<br />Money Easily</h3>
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-primary">↓</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-600">Wallet Balance</div>
        <div className="text-2xl font-bold">$98,481.44</div>
      </div>
      <Button className="w-full py-2 text-sm">Withdraw</Button>
      <div className="text-center text-xs text-gray-500 mt-2">Fund Wallet</div>
    </div>
  );
}