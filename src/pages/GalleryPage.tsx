import React from 'react';
import { Camera } from 'lucide-react';

const GalleryPage: React.FC = () => {
  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/3571555/pexels-photo-3571555.jpeg',
      title: 'Batumi Beach Cleanup',
      location: 'Batumi, Adjara',
      date: 'March 15, 2025',
      volunteers: 25,
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg',
      title: 'Borjomi Forest Restoration',
      location: 'Borjomi',
      date: 'March 10, 2025',
      volunteers: 18,
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/4350194/pexels-photo-4350194.jpeg',
      title: 'Tbilisi River Cleanup',
      location: 'Tbilisi',
      date: 'March 5, 2025',
      volunteers: 32,
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/7980889/pexels-photo-7980889.jpeg',
      title: 'Kazbegi Trail Maintenance',
      location: 'Kazbegi',
      date: 'February 28, 2025',
      volunteers: 15,
    },
    {
      id: 5,
      imageUrl: 'https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg',
      title: 'Kakheti Vineyard Cleanup',
      location: 'Telavi, Kakheti',
      date: 'February 25, 2025',
      volunteers: 22,
    },
    {
      id: 6,
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      title: 'Kutaisi Park Restoration',
      location: 'Kutaisi',
      date: 'February 20, 2025',
      volunteers: 28,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-12 h-12 text-green-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Cleanup Gallery
          </h1>
          <p className="text-green-100 text-center max-w-2xl mx-auto">
            See the impact of our community's efforts in restoring Georgia's natural beauty. These images showcase the dedication of our volunteers and the transformation of cleanup locations.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{item.date}</span>
                  <span>{item.volunteers} volunteers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;