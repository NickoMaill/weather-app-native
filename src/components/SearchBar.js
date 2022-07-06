import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

export default function SearchBar() {
    return (
        <View style={styles.sectionStyle}>
            <Image style={styles.imageStyle} source={require("../../assets/images/search-interface-symbol.png")} />
            <TextInput style={styles.inputSearch} placeholder="Rechercher une ville" textContentType='countryName' />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flexDirection: "column",
      marginHorizontal: 10,
    },
    imageStyle: {
      // padding: 10,
      margin: 5,
      height: 15,
      width: 15,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    centerItem: {
      justifyContent: 'center',
      alignItems: "center",
    },
    sectionStyle: {
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#000',
      backgroundColor: "#fff",
      height: 40,
      borderRadius: 50,
      margin: 10,
    },
    inputSearch: {
      flex: 1
    },
    mainView: {
      marginTop: 20,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
  })