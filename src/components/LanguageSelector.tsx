import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'it', name: 'IT' },
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' },
  { code: 'de', name: 'DE' }
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2">
      {languages.map(({ code, name }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`px-2 py-1 text-sm rounded transition ${
            i18n.language === code
              ? 'bg-white text-[rgb(25,24,25)]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}; 