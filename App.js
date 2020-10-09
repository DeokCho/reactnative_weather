import React, {useState, useEffect} from 'react';
import Loading from './components/loading';
import * as Location from 'expo-location';
import { Alert } from "react-native";
import axios from 'axios';
import config from './config'

const API_KEY = config.EXPO_WEATHER_KEY

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userLocation, setUserLocation] = useState({
    userLatitude: 0,
    userLongitude: 0
  })
  useEffect(()=>{
    getLocation();
  }, [])
  const getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    )
    console.log(data)
  }
  const getLocation = async() => {
    try{
        await Location.requestPermissionsAsync();
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude)
        console.log(latitude, longitude)
        setIsLoading(false)
    }catch(error){
        Alert.alert("Can't take you", "Bye");
    }
  }

  return <Loading/>
}
  
