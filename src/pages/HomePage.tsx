import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Globe, Users, Scroll } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import LocationCard from '../components/LocationCard';

const HomePage: React.FC = () => {
  // Mock data for featured locations
  const featuredLocations = [
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
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen-90 min-h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/17819586/pexels-photo-17819586/free-photo-of-beautiful-landscape-of-batumi-georgia.jpeg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Help Make Georgia <span className="text-green-400">Clean & Beautiful</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Join volunteers from around the world to restore Georgia's natural beauty. Find cleanup locations and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/map"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>Find Cleanup Locations</span>
              </Link>
              <Link
                to="/events"
                className="bg-white hover:bg-gray-100 text-green-800 px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Join an Event</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Cleanup Locations</h2>
            <Link
              to="/map"
              className="text-green-600 hover:text-green-700 font-medium flex items-center transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our community and help make Georgia's natural spaces cleaner and more beautiful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin className="w-10 h-10 text-green-600" />}
              title="Find a Location"
              description="Discover areas near you that need cleanup using our interactive map."
              number={1}
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-green-600" />}
              title="Join or Create Event"
              description="Participate in scheduled cleanups or organize your own event."
              number={2}
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-green-600" />}
              title="Make an Impact"
              description="Help preserve Georgia's natural beauty for future generations."
              number={3}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-xl text-green-200">Cleanup Locations</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold mb-2">1,200+</h3>
              <p className="text-xl text-green-200">Volunteers</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold mb-2">25 tons</h3>
              <p className="text-xl text-green-200">Waste Collected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Volunteer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Cleaning up Batumi beach was an incredible experience. Not only did we remove trash, but we also connected with locals who were grateful for our help."
              name="Sarah Johnson"
              title="Tourist from UK"
              imageUrl="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
            />
            <TestimonialCard
              quote="The platform made it so easy to find cleanup locations near my hostel. It was a great way to give back to Georgia during my travels."
              name="Markus Schmidt"
              title="Volunteer from Germany"
              imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            />
            <TestimonialCard
              quote="As a local guide, I bring tourists to cleanup events. It's become a meaningful part of experiencing Georgia's natural beauty."
              name="Nino Kapanadze"
              title="Local Tour Guide"
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make a difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of environmentally conscious volunteers and help preserve Georgia's natural beauty for future generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/map"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Find Cleanup Locations
            </Link>
            <Link
              to="/submit"
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Report Cleanup Need
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;