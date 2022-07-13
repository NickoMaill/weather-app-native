import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import { WeatherContext } from '../context/weatherContext'
import { regularStyle } from '../styles/regularStyle'
import { displayPic } from '../utils/displayWeatherPic'
import Title from './Title'

export default function MainWeather({ valueMetric, onChangeMetric, valueFavorites, onChangeFavorites }) {
  const Context = useContext(WeatherContext);
  const data = Context.data

  return (
    <View>
      <View style={styles.centerItem}>
        <Title size={20}>{data.city.name}, {data.city.country}</Title>
      </View>
      <View style={[styles.centerItem, styles.titleContainer]}>
        <View style={[styles.centerItem, styles.switchContainer]}>
          <Image source={require("../../assets/icons/favorite.png")} style={[{ width: 30, height: 30, marginRight: 10 }, valueFavorites ? { tintColor: "yellow" } : { tintColor: "#fff" }]} />
          <Switch value={valueFavorites} onChange={onChangeFavorites} />
        </View>
        <View style={[styles.centerItem, styles.switchContainer]}>
          <Text style={[regularStyle.mainFont, { alignItems: "center", marginHorizontal: 5 }]}>F°</Text>
          <Switch value={valueMetric} onChange={onChangeMetric} />
          <Text style={[regularStyle.mainFont, { alignItems: "center", marginHorizontal: 5 }]}>C°</Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.centerItem}>
          <Image style={{ tintColor: "#fff", width: 120, height: 120 }} source={displayPic(data.list[0].weather[0].icon)} />
        </View>
        <View style={styles.centerItem}>
          <Text style={{ color: "#fff", fontSize: 25, marginVertical: 15 }}>{data.list[0].weather[0].description}</Text>
          <Title size={40}>{Math.round(data.list[0].main.temp)} °C</Title>
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: ""
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