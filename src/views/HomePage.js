import React from 'react'
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require("../../assets/images/clouds.jpg")} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.body}>
        <Text>HomePage</Text>
        <Pressable onPress={() => navigation.navigate("Setup")}><Text>config</Text></Pressable>
        <Pressable onPress={() => navigation.navigate("Favorites")}><Text>favoris</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  body: {
    flex:1,
    justifyContent:"space-around",
  }
})