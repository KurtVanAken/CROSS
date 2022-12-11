import React, { useCallback } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Searchbutton = ({ children, onPressed, height = 36 }) => {
  const { button, buttonText } = styles;
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
    <TouchableHighlight style={[button, { height }]} onPress={onPressed} onLayout={onLayoutRootView}>
      <Text style={buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily:'Zelda',
    fontSize: 50 ,
    color: '#faf7dc'
  }
});

export default Searchbutton;