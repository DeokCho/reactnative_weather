import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.topFont}>Hello!!</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.bottomFont}>World!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topFont: {
    color: 'black',
    fontSize:'50px'
  },
  bottomFont: {
    color: 'white',
    fontSize:'50px'
  },
  box1:{
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2:{
    flex:3,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
