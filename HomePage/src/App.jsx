import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}