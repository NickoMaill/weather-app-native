import React from 'react'
import { Image, Text, View } from 'react-native'
import { regularStyle } from '../styles/regularStyle'
import { frenchDays } from '../utils/convertDays'
import { displayPic } from '../utils/displayWeatherPic'
import Title from './Title'

export default function ForecastWeatherDetails({ data }) {
    const fullDate = new Date(data.dt * 1000)
    return (
        <View>
            <Title>{frenchDays(fullDate.toUTCString().substring(0, 3))}</Title>
            <Image style={{ width: 30, height: 30, tintColor: "#fff" }} source={displayPic(data.weather[0].icon)} />
            <Text style={regularStyle.mainFont}>{Math.round(data.main.temp)} °</Text>
        </View>
    )
}
