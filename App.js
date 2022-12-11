import React, { useCallback  }from 'react';
import { Text } from 'react-native'
import { ThemeProvider } from './theme';
import StackNavigator, { RootNavigator } from './config/AppNavigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Zelda': require('./theme/fonts/Triforce.ttf')
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider onLayout={onLayoutRootView} style={{fontfamily: 'Zelda'}}>

    <RootNavigator></RootNavigator>
    </ThemeProvider>
  );
}


