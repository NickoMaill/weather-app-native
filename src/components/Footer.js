import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

export default function Footer() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate("Setup")}>
                <Image source={require("../../assets/icons/menu.png")} style={{ tintColor: "#fff", width: 30, height: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../assets/icons/home.png")} style={{ tintColor: "#fff", width: 30, height: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
                <Image source={require("../../assets/icons/favorite.png")} style={{ tintColor: "#fff", width: 30, height: 30 }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})
