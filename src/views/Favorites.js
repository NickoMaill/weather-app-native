import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import FavoriteCard from '../components/FavoriteCard';
import { WeatherContext } from '../context/weatherContext';
import { displayPic } from '../utils/displayWeatherPic';
import { getStorage } from '../utils/asyncStorage';
import { getWeather } from '../utils/weatherRequest';

export default function Favorites() {
  // const navigation = useNavigation();
  const Context = useContext(WeatherContext);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    if (Context.favorites.length > 0) {
      Context.setIsLoading(true)
      Context.favorites.map((favLabel, i) => {
        getWeather(favLabel)
          .then((res) => setFavoritesData((prevState) => {
            [...prevState, res]
          }))
      })
      if (favoritesData.length === favorites.length) {
        Context.setIsLoading(false)
      }

    }
  })

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(73, 70, 70, 0.5)", flex: 1 }}>
      <FlatList
        data={favoritesData}
        renderItem={(data) => <FavoriteCard data={data.item} index={data.index}/>}
        keyExtractor={(_data, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ borderRightWidth: 2, borderRightColor: "#fff" }}></View>
      )}
      />
    </SafeAreaView>
  )
}
