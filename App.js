/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { WeatherContext } from './src/context/weatherContext';
import { displayBackground } from './src/utils/displayWeatherPic';
import HomePage from './src/views/HomePage';
import Favorites from './src/views/Favorites';
import Setup from './src/views/Setup';
import 'react-native-gesture-handler';
import Footer from './src/components/Footer';
import { getStorage } from './src/utils/asyncStorage';
import Error from './src/views/Error';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([])
  console.log("data", data.cod);

  const value = {
    data,
    setData,

    isLoading,
    setIsLoading,

    favorites,
    setFavorites,
  }

  return (
    <WeatherContext.Provider value={value}>
      <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "transparent" } }}>
        {data.cod !== "401" || data.cod !== "426" || data.cod !== "500" ?
          <ImageBackground source={!isLoading && displayBackground(data.list[0].weather[0].icon)} resizeMode="cover" style={styles.image}>
            <StatusBar barStyle={'light-content'} />
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: "horizontal", cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
              <Stack.Screen name='Home' component={HomePage} />
              <Stack.Screen options={{ animation: "simple_push" }} name='Favorites' component={Favorites} />
              <Stack.Screen options={{ animation: "slide_from_left" }} name='Setup' component={Setup} />
              <Stack.Screen options={{ animation: "slide_from_left" }} name='Error' component={Error} />
            </Stack.Navigator>
            <Footer />
          </ImageBackground>
          :
          <Error />
        }
      </NavigationContainer>
    </WeatherContext.Provider>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})