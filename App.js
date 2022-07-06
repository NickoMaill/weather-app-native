/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomePage from './src/views/HomePage';
import Favorites from './src/views/Favorites';
import Setup from './src/views/Setup'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Favorites' component={Favorites} />
        <Stack.Screen name='Setup' component={Setup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
  }
});
