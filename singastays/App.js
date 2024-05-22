import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    // Load other font weights if needed
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log("Fonts loaded successfully");
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    } else {
      console.log("Fonts not yet loaded");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible
  }

  return <Navigation />;
}
