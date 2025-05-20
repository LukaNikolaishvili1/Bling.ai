import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-green-300" />
              <span className="font-bold text-xl">CleanGeorgia</span>
            </div>
            <p className="text-green-100 mb-4">
              Together we can make Georgia's natural landscapes cleaner and more beautiful.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/map" className="text-green-200 hover:text-white transition-colors">
                  Cleanup Map
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-green-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-green-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-green-200 hover:text-white transition-colors">
                  Report Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#faq" className="text-green-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about#partners" className="text-green-200 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <a
                  href="#resources"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex items-start space-x-2 mb-2">
              <Mail className="w-5 h-5 mt-0.5 text-green-300" />
              <a
                href="mailto:info@cleangeorgia.org"
                className="text-green-200 hover:text-white transition-colors"
              >
                info@cleangeorgia.org
              </a>
            </div>
            <form className="mt-4">
              <p className="text-sm text-green-200 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm bg-green-800 text-white placeholder:text-green-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 rounded-r-md transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} CleanGeorgia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;