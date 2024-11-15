import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import { GlobalProvider } from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ fontsLoaded, error ] = useFonts({
    'Work-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'Work-Regular': require('../assets/fonts/WorkSans-Regular.ttf'),
  });
  
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error]);

  if(!fontsLoaded && error) return null;  

  return (
    <GlobalProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
    </GlobalProvider>
  );
}

