// SplashScreenContext.js
import React, { createContext, useContext, useState } from 'react';

const SplashScreenContext = createContext();

export const useSplashScreen = () => useContext(SplashScreenContext);

export const SplashScreenProvider = ({ children }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true); // Default to true to show on first load

  return (
    <SplashScreenContext.Provider value={{ showSplashScreen, setShowSplashScreen }}>
      {children}
    </SplashScreenContext.Provider>
  );
};
