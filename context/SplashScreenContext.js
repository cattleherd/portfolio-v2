import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for managing the splash screen's visibility
const SplashScreenContext = createContext();

// Custom hook to easily access the splash screen context 
export const useSplashScreen = () => useContext(SplashScreenContext);

// Provider component to wrap your application and provide the splash screen context
export const SplashScreenProvider = ({ children }) => {
  // State variable to control the visibility of the splash screen 
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Function to hide the splash screen
  const hideSplashScreen = () => {
    setShowSplashScreen(false);
  }

  // Provide the context value (showSplashScreen and hideSplashScreen) to child components
  return (
    <SplashScreenContext.Provider
      value={{ showSplashScreen, hideSplashScreen }}
    >
      {children}
    </SplashScreenContext.Provider>
  );
};