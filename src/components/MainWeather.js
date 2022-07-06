import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { WeatherContext } from '../context/weatherContext'
import { displayPic } from '../utils/displayWeatherPic'
import Title from './Title'

export default function MainWeather() {
    const Context = useContext(WeatherContext)
  return (
    <View>
    <View style={styles.centerItem}>
      <Title size={20}>{Context.data.city.name}, {Context.data.city.country}</Title>
    </View>
    <View style={styles.mainView}>
      <View style={styles.centerItem}>
        <Image style={{ tintColor: "#fff", width: 120, height: 120 }} source={displayPic(Context.data.list[0].weather[0].icon)} />
      </View>
      <View style={styles.centerItem}>
        <Text style={{ color: "#fff", fontSize: 25, marginVertical: 15 }}>{Context.data.list[0].weather[0].description}</Text>
        <Title size={40}>{Math.round(Context.data.list[0].main.temp)} °C</Title>
      </View>
    </View>
  </View>
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