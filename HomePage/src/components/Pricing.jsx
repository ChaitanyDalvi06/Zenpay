import React from 'react';

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find the right plan for your needs</h2>
          <p className="text-gray-600">Choose the perfect plan that works best for you</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <div className="text-4xl font-bold mb-6">₹70 <span className="text-base font-normal text-gray-600">per month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Basic features and services
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                AI Investment Advisor
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Spending Analysis
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90">
              Get Started
            </button>
          </div>
          
          <div className="bg-secondary text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Student Plan</h3>
            <div className="text-4xl font-bold mb-6">₹45 <span className="text-base font-normal opacity-80">per month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                All features from Basic Plan
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Spending Analysis
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Buy Merchants 
              </li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}