import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { regularStyle } from '../styles/regularStyle'

export default function WeatherInfo({ data, icon }) {
    return (
        <View style={styles.infoContainer}>
            <Image style={{ width: 25, height: 25, tintColor: "#fff" }} source={icon} />
            <Text style={[regularStyle.mainFont, { marginHorizontal: 5, fontSize: 17 }]}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})