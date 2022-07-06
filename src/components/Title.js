import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Title({ children, size, style }) {
  const fontSiz = size
  return (
    <Text style={[styles.title, { fontSize: size }, style]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#F1F1F1",
    fontWeight:"bold",
    marginVertical: 10,
  }
})
