import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, ArrowRight } from 'lucide-react';

interface LocationCardProps {
  location: {
    id: string;
    name: string;
    type: string;
    imageUrl: string;
    description: string;
    location: string;
  };
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={location.imageUrl} 
          alt={location.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {location.type}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location.location}</span>
        </div>
        <p className="text-gray-700 mb-4">{location.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">12 volunteers needed</span>
          </div>
          <Link 
            to={`/location/${location.id}`}
            className="text-green-600 hover:text-green-700 font-medium flex items-center transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;