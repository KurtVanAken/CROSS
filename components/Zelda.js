import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Zelda = ({ children}) => {
  
  const [fontsLoaded] = useFonts({
    'Zelda': require('../theme/fonts/Triforce.ttf')
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
   <View style={{fontFamily: 'Zelda'}}>{children}</View>
   
  );
};


export default Zelda;