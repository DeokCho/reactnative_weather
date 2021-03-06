import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA'
    },
    font:{
        color: 'black',
        fontSize: 50
    }
})

const Loading = () =>{
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.font}>Weather</Text>
        </View>
    )
}

export default Loading