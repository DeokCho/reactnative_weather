import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "천둥번개",
      subtitle: "찌릿찌릿!"
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "보슬비",
      subtitle: "하늘에서 미스트가 뿌려진다!"
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: "비",
      subtitle: "우산 잊지마세요!"
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "눈",
      subtitle: "Do you want to build a snowman?"
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "대기",
      subtitle: "이게 뭐지?"
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "맑음",
      subtitle: "햇빛은 쨍쨍, 모래알은 반짝"
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "흐림",
      subtitle: "구름이 세상을 지배한다"
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "안개",
      subtitle: "앞이 보이지 않아.. "
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "황사",
      subtitle: "중국에서 보내주는 선물"
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "안개",
      subtitle: "이것도 안개인가?"
    }
  };

const Weather = ({temp, condition}) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.topContainer}>
                <MaterialCommunityIcons 
                    name="material-design" 
                    size={86} 
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

export default Weather

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp:{
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    subtitle:{
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})