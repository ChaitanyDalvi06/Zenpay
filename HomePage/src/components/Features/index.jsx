import React from 'react';
import ExchangeRateCard from './ExchangeRateCard';
import PhoneDisplay from './PhoneDisplay';
import WithdrawCard from './WithdrawCard';

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Discover Our Key Features</h2>
        
        <div className="relative flex items-center justify-center">
          <ExchangeRateCard />
          <PhoneDisplay />
          <WithdrawCard />
        </div>
      </div>
    </section>
  );
}