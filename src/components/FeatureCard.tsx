import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  number: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, number }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-green-100 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;