import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import { Alert } from "react-native";
import axios from 'axios';
import config from './config'
import Weather from './components/Weather';

const API_KEY = config.EXPO_WEATHER_KEY

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [temp, setTemp] = useState("")
  const [condition, setCondition] = useState("")
  useEffect(()=>{
    getLocation();
  },[])
  const getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    setTemp(data.main.temp)
    setCondition(data.weather[0].main)
    setIsLoading(false)
  }
  const getLocation = async() => {
    try{
        await Location.requestPermissionsAsync();
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude)
    }catch(error){
        Alert.alert("Can't take you", "Bye");
    }
  }
  return isLoading? <Loading/>: <Weather temp={Math.round(temp)} condition={condition}/>
}
  
