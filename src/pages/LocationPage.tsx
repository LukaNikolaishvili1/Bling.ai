import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowLeft, Camera, Trash2, Clock } from 'lucide-react';

// Mock location data - in a real app, this would come from an API
const locationData = {
  '1': {
    id: '1',
    name: 'Batumi Beach',
    type: 'Beach',
    imageUrl: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg',
    description: 'Batumi Beach is one of Georgia\'s most popular Black Sea beaches, but it suffers from plastic pollution, especially during the tourist season. Cleanup efforts are needed to remove plastic waste, bottles, and other debris that wash up on shore.',
    location: 'Batumi, Adjara',
    coordinates: '41.6532° N, 41.6444° E',
    wasteType: 'Plastic bottles, food packaging, cigarette butts, fishing gear',
    difficulty: 'Easy',
    accessInfo: 'Easy access via public transportation. Beach can be reached by foot from downtown Batumi.',
    upcomingEvents: [
      { 
        id: 'e1', 
        title: 'Weekend Beach Cleanup', 
        date: '2025-06-15', 
        time: '10:00 AM - 2:00 PM',
        participants: 18,
        capacity: 25
      },
      { 
        id: 'e2', 
        title: 'International Coastal Cleanup Day', 
        date: '2025-07-05', 
        time: '9:00 AM - 3:00 PM',
        participants: 8,
        capacity: 40
      }
    ],
    galleryImages: [
      'https://images.pexels.com/photos/3573407/pexels-photo-3573407.jpeg',
      'https://images.pexels.com/photos/3571555/pexels-photo-3571555.jpeg',
      'https://images.pexels.com/photos/1647438/pexels-photo-1647438.jpeg',
    ],
    beforeAfterImages: [
      {
        before: 'https://images.pexels.com/photos/2421932/pexels-photo-2421932.jpeg',
        after: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg'
      }
    ]
  },
  // Additional location data would go here
};

const LocationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = id ? locationData[id as keyof typeof locationData] : null;

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Location not found</h2>
          <p className="text-gray-600 mb-6">
            The cleanup location you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/map" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to map
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img 
          src={location.imageUrl} 
          alt={location.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <div className="container mx-auto">
            <Link 
              to="/map" 
              className="inline-flex items-center text-white hover:text-green-200 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to map
            </Link>
            <div className="flex items-center mb-2">
              <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">
                {location.type}
              </span>
              <div className="flex items-center text-green-200">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{location.location}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Location</h2>
              <p className="text-gray-700 mb-6">
                {location.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    Location Details
                  </h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">Coordinates:</span> {location.coordinates}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Access:</span> {location.accessInfo}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Trash2 className="w-5 h-5 mr-2 text-green-600" />
                    Cleanup Information
                  </h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">Waste Type:</span> {location.wasteType}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Difficulty:</span> {location.difficulty}
                  </p>
                </div>
              </div>
              
              {/* Before/After Gallery */}
              {location.beforeAfterImages && location.beforeAfterImages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-green-600" />
                    Before & After
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {location.beforeAfterImages.map((images, index) => (
                      <React.Fragment key={index}>
                        <div className="relative">
                          <img 
                            src={images.before} 
                            alt="Before cleanup" 
                            className="w-full h-48 object-cover rounded-lg" 
                          />
                          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={images.after} 
                            alt="After cleanup" 
                            className="w-full h-48 object-cover rounded-lg" 
                          />
                          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                            AFTER
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Photo Gallery */}
              {location.galleryImages && location.galleryImages.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {location.galleryImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${location.name} gallery image ${index + 1}`} 
                        className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer" 
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Upcoming Cleanup Events
              </h2>
              
              {location.upcomingEvents && location.upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {location.upcomingEvents.map(event => (
                    <div key={event.id} className="border border-gray-100 rounded-lg p-4 hover:border-green-200 transition-colors">
                      <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span>
                            {event.participants}/{event.capacity} volunteers
                          </span>
                        </div>
                        <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">
                  No upcoming events scheduled for this location yet.
                </p>
              )}
              
              <button className="w-full mt-4 py-2 px-4 bg-white border border-green-600 text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors">
                Organize Cleanup Event
              </button>
            </div>
            
            {/* Take Action Card */}
            <div className="bg-green-50 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-800">Take Action</h2>
              <p className="text-gray-700 mb-6">
                Can't make it to an event? There are other ways you can help keep Georgia clean and beautiful.
              </p>
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors">
                  Volunteer Registration
                </button>
                <button className="w-full py-2 px-4 bg-white border border-green-600 text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors">
                  Donate to Cleanup Fund
                </button>
                <button className="w-full py-2 px-4 bg-white border border-green-600 text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors">
                  Report Issue at This Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;