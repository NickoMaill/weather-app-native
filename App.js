/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import 'react-native-gesture-handler'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/views/HomePage';
import Favorites from './src/views/Favorites';
import Setup from './src/views/Setup'
import Footer from './src/components/Footer';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { CardStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { WeatherContext } from './src/context/weatherContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([{}]);

  const value = {
    data,
    setData,
  }

  return (
    <WeatherContext.Provider value={value}>
    <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'transparent' } }}>
      <ImageBackground source={require("./assets/images/sun-night.jpeg")} resizeMode="cover" style={styles.image}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: "horizontal", cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen options={{ animation: "simple_push" }} name='Favorites' component={Favorites} />
          <Stack.Screen options={{ animation: "slide_from_left" }} name='Setup' component={Setup} />
        </Stack.Navigator>
        <Footer />
      </ImageBackground>
    </NavigationContainer>
    </WeatherContext.Provider>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})