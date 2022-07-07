import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Title from '../components/Title';
import { displayPic } from '../utils/displayWeatherPic';
import { WeatherContext } from '../context/weatherContext';
import WeatherDetails from '../components/WeatherDetails';
import MainWeather from '../components/MainWeather';
import SearchBar from '../components/SearchBar';
import ForecastWeather from '../components/ForecastWeather';

export default function HomePage() {
  const navigation = useNavigation();
  const Context = useContext(WeatherContext)
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    Context.setIsLoading(true)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=23835421f51d272a90553849c92a284e&lang=fr&units=metric`)
    const data = await response.json().then((res) => {
      Context.setData(res);
    }).finally(() => Context.setIsLoading(false))
      .catch((err) => {
        console.error(err);
      })
  }

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    switch (gestureName) {
      case "SWIPE_LEFT":
        navigation.navigate("Setup")
        break;
      case "SWIPE_RIGHT":
        navigation.navigate("Favorites")
      default:
        break;
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipe={onSwipe}>
      <SafeAreaView style={styles.body}>
        <View>
          <SearchBar />
          {Context.isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View>
              <MainWeather />
              <WeatherDetails />
              <ForecastWeather />
            </View>
          )}
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  imageStyle: {
    // padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: "center",
  },
  sectionStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 50,
    margin: 10,
  },
  inputSearch: {
    flex: 1
  },
  mainView: {
    marginTop: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})