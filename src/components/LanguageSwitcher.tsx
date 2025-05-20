import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ka' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-green-50 text-green-800 hover:bg-green-100 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === 'en' ? 'English' : 'ქართული'}</span>
    </button>
  );
};

export default LanguageSwitcher;