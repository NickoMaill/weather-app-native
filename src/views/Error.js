import React from 'react'
import RNRestart from 'react-native-restart'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { regularStyle } from '../styles/regularStyle'

export default function Error() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={[regularStyle.mainFont, {textAlign: "center"}]}>oups une erreur est survenu... veuillez recharger l'application</Text>
            <TouchableOpacity onPress={() => RNRestart.Restart()}>
                <Image source={require("../../assets/icons/refresh.png")} style={{ marginTop:40, width: 40, height: 40, tintColor: "#fff" }}/>
            </TouchableOpacity>
        </View>
    )
}
