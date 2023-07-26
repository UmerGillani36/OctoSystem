import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSelectionChange = languageCode => {
    if(languageCode === 'US'){
      setSelectedLanguage('en');
    }
    else if(languageCode === 'BR'){
      setSelectedLanguage('pt');
    }
    else{
      return;
    }
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleSelectionChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
