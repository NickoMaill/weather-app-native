import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { WeatherContext } from '../context/weatherContext'
import { regularStyle } from '../styles/regularStyle'
import WeatherInfo from './WeatherInfo'

export default function WeatherDetails() {
    const Context = useContext(WeatherContext)
    return (
        <View style={styles.infoGroup}>
            <WeatherInfo data={Math.round(Context.data.list[0].main.temp_min) + "°"} icon={require(`../../assets/icons/minTemp.png`)}/>
            <WeatherInfo data={Math.round(Context.data.list[0].main.temp_max) + "°"} icon={require(`../../assets/icons/maxTemp.png`)}/>
            <WeatherInfo data={Context.data.list[0].main.humidity + " %"} icon={require(`../../assets/icons/drop.png`)}/>
            <WeatherInfo data={Context.data.list[0].wind.speed + " ms"} icon={require(`../../assets/icons/wind.png`)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    infoGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        marginTop: 15,
    }
})
