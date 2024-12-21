import React from 'react';

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">100K</div>
            <div className="text-gray-600">Growing customers</div>
          </div>
          
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600">Customer satisfaction</div>
          </div>
          
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">#2</div>
            <div className="text-gray-600">Banking app in Mumbai</div>
          </div>
        </div>
      </div>
    </section>
  );
}