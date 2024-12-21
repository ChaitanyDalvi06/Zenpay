import React from 'react';
import Button from './ui/Button';
import heroApp from '../assets/hero-app.png';
import heroCard from '../assets/hero-card.png';
import heroProfile from '../assets/hero-profile.png';
import paymentApp from '../assets/payment-app.png';

export default function Hero() {
  return (
    <div className="pt-12 pb-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Pay Smarter.<br />Live Better.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Manage your finances effortlessly with our advanced banking solutions. Safe, fast, and designed for your everyday needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Get Started Today</Button>
              <Button variant="secondary">Learn More →</Button>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">✓</span>
                </div>
                <span className="text-sm text-gray-600">AI Investment Advisor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">✓</span>
                </div>
                <span className="text-sm text-gray-600">Dashboard & Analytics</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={paymentApp} 
                  alt="Payment App Interface" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
                <div className="bg-primary p-8 rounded-lg shadow-lg text-white h-[300px] flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">We Provide Best Services</h3>
                  <p className="text-lg opacity-80">Trusted by millions worldwide</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src={heroApp} 
                  alt="Mobile Banking" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover" 
                />
                <img 
                  src={heroProfile} 
                  alt="Customer Support" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}