import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Take control of your financial future today.</h2>
        <p className="text-lg opacity-80 mb-8">
          Empower your financial journey with personalized insights and easy-to-use tools designed to help you succeed.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2 bg-white p-1 rounded-full">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-900 focus:outline-none"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}