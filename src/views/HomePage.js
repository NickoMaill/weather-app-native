import React, { useContext, useEffect, useState } from 'react';
import { AppState, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { WeatherContext } from '../context/weatherContext';
import WeatherDetails from '../components/WeatherDetails';
import MainWeather from '../components/MainWeather';
import SearchBar from '../components/SearchBar';
import ForecastWeather from '../components/ForecastWeather';
import Sunrise from '../components/Sunrise';
import Spinner from 'react-native-spinkit'
import { getWeather } from '../utils/weatherRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToStorage, deleteFromStorage, getStorage } from '../utils/asyncStorage';

export default function HomePage() {
  const navigation = useNavigation();
  const Context = useContext(WeatherContext);
  const cityName = !Context.isLoading && Context.data.city.name;
  const [metric, setMetric] = useState(true);
  const [isFavorites, setIsFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const { width, height } = Dimensions.get("window");

  const onMetricChange = () => {
    setMetric(!metric);
  }

  const onFavoriteChange = () => {
    setIsFavorites(!isFavorites)
  }

  const weatherRes = async (city, units, e) => {
    // e.preventDefault();
    Context.setIsLoading(true);
    setIsFavorites(false)
    getWeather(city, units)
      .then((res) => {
        if (res.cod === '404') {

        } else {
          Context.setData(res)
        }
      })
      .finally(() => {
        Context.setIsLoading(false);
        setSearch("");
      })
  };

  const checkFavorites = async () => {
    getStorage("@favorites").then((res) => {
      setFavorites(res)
      if (res.includes(cityName)) {
        setIsFavorites(true);
      }
    });
  }

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    switch (gestureName) {
      case "SWIPE_LEFT":
        navigation.navigate("Setup")
        break;
      case "SWIPE_RIGHT":
        navigation.navigate("Favorites")
      default:
        break;
    }
  }

  useEffect(() => {
    AppState.addEventListener("change", state => {
      if (state === "active") {
        weatherRes();
      }
    })
  }, [])

  useEffect(() => {
    if (!Context.isLoading) {
      checkFavorites();
    }
  }, [Context.isLoading])

  useEffect(() => {
    if (metric) {
      weatherRes(cityName, "metric")
    } else {
      weatherRes(cityName, "imperial")
    }
  }, [metric])

  useEffect(() => {
    if (!Context.isLoading) {
      if (isFavorites && favorites.indexOf(Context.data.city.name) < 0) {
        addToStorage("@favorites", Context.data.city.name, favorites)
      }

      if (!isFavorites && favorites.indexOf(Context.data.city.name) !== -1) {
        deleteFromStorage("@favorites", Context.data.city.name, favorites)
      }

    }
  }, [isFavorites])


  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipe={onSwipe}>
      <SafeAreaView style={styles.body}>
        <View>

          <SearchBar value={search} onPress={() => weatherRes(search, "metric")} onChange={(e) => setSearch(e)} />
          {Context.isLoading ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Spinner type='Bounce' size={200} color="#f1f1f1f1" style={{ marginTop: height / 3.5 }} />
            </View>
          ) : (
            <View>
              <MainWeather
                valueMetric={metric}
                onChangeMetric={onMetricChange}
                valueFavorites={isFavorites}
                onChangeFavorites={onFavoriteChange}
              />
              <WeatherDetails />
              <ForecastWeather />
              <Sunrise />
            </View>
          )}
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  body: {
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