import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, imageUrl }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-md p-6 flex flex-col">
      <div className="mb-4">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-200"
        >
          <path 
            d="M14.4 24H8V18.4C8 12.08 13.28 7 20 7V11.6C15.84 11.6 12.4 14.96 12.4 19.2V24ZM32.8 24H26.4V18.4C26.4 12.08 31.68 7 38.4 7V11.6C34.24 11.6 30.8 14.96 30.8 19.2V24Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;