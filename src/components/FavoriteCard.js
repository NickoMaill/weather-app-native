import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { displayPic } from '../utils/displayWeatherPic'
import Title from './Title'

export default function FavoriteCard({ data, index }) {
    const color = ["#00A8F4", "#CDDC39", "#607D8A", "#00A8F4", "#673AB6", "#ed9c10", "#ed577d", "#3f3c1a"];

    return (
        <View style={{ backgroundColor: color[index] }}>
            <View>
                <View>
                    <Image source={displayPic(data)} />
                    <Text>{data} °C</Text>
                </View>
                <View>
                    <Title>{data}</Title>
                    <Text>{data}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Image style={{ tintColor: "#fff" }} source={require("../../assets/icons/cross.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
