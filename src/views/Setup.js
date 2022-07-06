import React from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Setup() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Setup</Text>
      <Pressable onPress={() => navigation.navigate("Home")}><Text>Home</Text></Pressable>
    </SafeAreaView>
  )
}
