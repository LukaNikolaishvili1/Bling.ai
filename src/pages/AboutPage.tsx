import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg text-gray-600 mb-12">
          <p className="mb-6">
            Welcome to our community-driven platform dedicated to discovering and sharing the hidden gems
            of our world. Our mission is to connect people with remarkable places and experiences that
            might otherwise go unnoticed.
          </p>
          <p className="mb-6">
            Founded by a group of passionate explorers and local culture enthusiasts, we believe that
            every location has a story worth telling. Through our platform, we aim to preserve and
            share these stories while building a global community of curious minds.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-700">123 Explorer Street, Adventure City, AC 12345</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">Community First</h3>
              <p className="text-gray-600">
                We believe in the power of community and collective knowledge sharing.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">Authenticity</h3>
              <p className="text-gray-600">
                We promote genuine experiences and honest, unbiased information.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900">Sustainability</h3>
              <p className="text-gray-600">
                We advocate for responsible tourism and environmental consciousness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;