import React, { useState } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import LocationCard from '../components/LocationCard';

// Mock location data
const mockLocations = [
  {
    id: '1',
    name: 'Batumi Beach',
    type: 'Beach',
    imageUrl: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg',
    description: 'Plastic waste cleanup needed at this beautiful Black Sea beach.',
    location: 'Batumi, Adjara',
  },
  {
    id: '2',
    name: 'Borjomi Forest',
    type: 'Forest',
    imageUrl: 'https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg',
    description: 'Help restore this historic forest area by removing litter and debris.',
    location: 'Borjomi, Samtskhe-Javakheti',
  },
  {
    id: '3',
    name: 'Tbilisi River Bank',
    type: 'River',
    imageUrl: 'https://images.pexels.com/photos/4350194/pexels-photo-4350194.jpeg',
    description: 'Join our efforts to clean up garbage along the Mtkvari River.',
    location: 'Tbilisi',
  },
  {
    id: '4',
    name: 'Kazbegi Mountain Trail',
    type: 'Mountain',
    imageUrl: 'https://images.pexels.com/photos/7980889/pexels-photo-7980889.jpeg',
    description: 'Help clean hiking trails and remove trash left by tourists.',
    location: 'Kazbegi, Mtskheta-Mtianeti',
  },
  {
    id: '5',
    name: 'Kakheti Vineyard',
    type: 'Agricultural',
    imageUrl: 'https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg',
    description: 'Clean up agricultural waste near local vineyards and help local farmers.',
    location: 'Telavi, Kakheti',
  },
  {
    id: '6',
    name: 'Kutaisi Park',
    type: 'Urban Park',
    imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    description: 'Help clean and restore this urban green space in Georgia\'s second-largest city.',
    location: 'Kutaisi, Imereti',
  }
];

// Location types for filter
const locationTypes = ['All', 'Beach', 'Forest', 'River', 'Mountain', 'Urban Park', 'Agricultural'];

const MapPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Filter locations based on search term and selected type
  const filteredLocations = mockLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         location.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || location.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Cleanup Locations Map</h1>
          <p className="text-green-100 max-w-2xl mb-6">
            Find cleanup locations across Georgia. Filter by location type, search for specific places, or browse the map to discover where your help is needed most.
          </p>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search by location name or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="md:hidden absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          
          <div className="hidden md:flex mt-4 space-x-2 overflow-x-auto pb-2">
            {locationTypes.map(type => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-white text-green-700'
                    : 'bg-green-600 text-white hover:bg-green-500'
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden mt-4 bg-white rounded-md shadow-md p-4 absolute z-10 left-4 right-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-gray-900 font-medium">Filter by Type</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {locationTypes.map(type => (
                  <button
                    key={type}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      selectedType === type
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      setSelectedType(type);
                      setShowFilters(false);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Container */}
          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-md bg-white p-2 h-[500px]">
            <div className="bg-gray-200 h-full rounded flex items-center justify-center">
              {/* Placeholder for the actual map */}
              <div className="text-center p-4">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600 max-w-xs mx-auto">
                  Interactive map will be implemented here using a mapping library such as Leaflet or Google Maps.
                </p>
              </div>
            </div>
          </div>

          {/* Locations List */}
          <div className="lg:w-1/2">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredLocations.length} Cleanup {filteredLocations.length === 1 ? 'Location' : 'Locations'} Found
              </h2>
              <div className="text-sm text-gray-500">
                {selectedType !== 'All' && (
                  <button 
                    className="flex items-center text-green-600 hover:text-green-700"
                    onClick={() => setSelectedType('All')}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear filter
                  </button>
                )}
              </div>
            </div>
            
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              {filteredLocations.length > 0 ? (
                filteredLocations.map(location => (
                  <LocationCard key={location.id} location={location} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-500">No cleanup locations found matching your criteria.</p>
                  <button 
                    className="mt-4 text-green-600 hover:text-green-700 font-medium"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedType('All');
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;