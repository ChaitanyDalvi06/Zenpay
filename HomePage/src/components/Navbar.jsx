import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Slice</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}