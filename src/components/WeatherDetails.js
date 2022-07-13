import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { WeatherContext } from '../context/weatherContext'
import { regularStyle } from '../styles/regularStyle'
import WeatherInfo from './WeatherInfo'

export default function WeatherDetails() {
    const Context = useContext(WeatherContext)
    const data = Context.data;

    return (
        <View style={styles.infoGroup}>
            <WeatherInfo data={Math.round(data.list[0].main.temp_min) + "°"} icon={require(`../../assets/icons/minTemp.png`)}/>
            <WeatherInfo data={Math.round(data.list[0].main.temp_max) + "°"} icon={require(`../../assets/icons/maxTemp.png`)}/>
            <WeatherInfo data={data.list[0].main.humidity + " %"} icon={require(`../../assets/icons/drop.png`)}/>
            <WeatherInfo data={data.list[0].wind.speed + " m/s"} icon={require(`../../assets/icons/wind.png`)}/>
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
