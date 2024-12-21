import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-6 py-3 rounded-lg transition-colors duration-200';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'border border-primary text-primary hover:bg-primary/10',
    white: 'bg-white text-gray-900 hover:bg-gray-50',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}