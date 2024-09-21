"use client"; // Indicates this component will be rendered on the client-side

import { useEffect } from "react";
import { useSplashScreen } from "../context/SplashScreenContext"; 

export default function SplashScreen() {
  // Access the showSplashScreen state and hideSplashScreen function from the context
  const { showSplashScreen, hideSplashScreen } = useSplashScreen();

  useEffect(() => {
    const loadingFunction = () => {
      // Get references to the splash screen elements from the DOM
      const splashScreen = document.querySelector(".splash__screen");
      const splashLeft = document.querySelector(".left");
      const splashRight = document.querySelector(".right");
      const progressBar = document.querySelector(".progress__bar");
      const percentage = document.querySelector(".percentage");

      let loading = true; // Flag to track loading status

      async function setup() {
        // Simulate loading progress by updating the progress bar's height at intervals
        setTimeout(() => {
          progressBar.style.height = "40%";
        }, 2000);

        setTimeout(() => {
          progressBar.style.height = "80%";
        }, 4000);

        setTimeout(() => {
          progressBar.style.height = "100%";
        }, 5000);

        // After the progress bar is complete, add animation classes and set loading to false
        setTimeout(() => {
          splashLeft.classList.add("active");
          splashRight.classList.add("active");
          progressBar.classList.add("complete");
          splashScreen.classList.add("complete");
          loading = false;

          // Hide the splash screen after a short delay
          setTimeout(() => {
            hideSplashScreen(); 
          }, 1000);
        }, 6000);
      }

      // Function to track the percentage of the progress bar and update the percentage text
      function percentageTracker() {
        if (loading) {
          let { height } = progressBar.getBoundingClientRect();
          let p = Math.ceil((height / window.innerHeight) * 100);
          percentage.textContent = `${p}%`;
          requestAnimationFrame(percentageTracker); // Recursively call to update the percentage
        }
      }

      setup(); 
      percentageTracker(); 
    };

    loadingFunction(); 
  }, []); 

  // Render the splash screen elements
  return (
    <div className="splash__screen">
      <div className="left"></div>
      <div className="right">
        <h1 className="percentage">0%</h1>
      </div>
      <div className="progress__bar"></div>
    </div>
  );
}