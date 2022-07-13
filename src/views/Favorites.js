import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import FavoriteCard from '../components/FavoriteCard';
import { WeatherContext } from '../context/weatherContext';
import { deleteFromStorage, getStorage } from '../utils/asyncStorage';
import { getWeather } from '../utils/weatherRequest';
import Spinner from 'react-native-spinkit';

export default function Favorites() {
  // const navigation = useNavigation();
  const Context = useContext(WeatherContext);
  const [favoritesData, setFavoritesData] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const checkFavorites = async () => {
    Context.setIsLoading(true)
    getStorage("@favorites").then((res) => {
      setFavorites(res)
    });
  }

  const deleteFavorite = async (index) => {
    setIsLoading(true)
    deleteFromStorage("@favorites", index, favorites).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    console.log("favoris");
    checkFavorites();
  }, [])

  useEffect(() => {
    if (favorites.length > 0) {
      favorites.map((favName) => {
        getWeather(favName, "metric").then((res) => {
          setFavoritesData(prevState => [...prevState, res])
        })
      })
      Context.setIsLoading(false)
    } else {
      Context.setIsLoading(false)
    }
  }, [favorites])

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(73, 70, 70, 0.5)", flex: 1 }}>
      {!Context.isLoading ?
        favoritesData.length > 0 ?
          <FlatList
            data={favoritesData}
            renderItem={(data) => <FavoriteCard loading={isLoading} data={data.item} index={data.index} onPress={() => deleteFavorite(data.index)} />}
            keyExtractor={(_data, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ borderRightWidth: 2, borderRightColor: "#fff" }}></View>
            )}
          />
          :
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, color: "#fff" }}>Vous n'avez pas de favoris...</Text>
          </View>
        :
        <Spinner type="Bounce" />
      }

    </SafeAreaView>
  )
}
