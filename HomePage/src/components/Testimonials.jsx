import React from 'react';
import testimonialImage from '../assets/testimonial.png';

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <blockquote className="text-2xl font-medium mb-8">
              "Working with Scappa has been a game-changer for my financial well-being. Their expert guidance and user-friendly tools made easy to understand."
            </blockquote>
            <div>
              <p className="font-semibold">Kylee Systems</p>
              <p className="text-gray-600">Financial Advisor</p>
            </div>
          </div>
          <div>
            <img 
              src={testimonialImage}
              alt="Testimonial" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}