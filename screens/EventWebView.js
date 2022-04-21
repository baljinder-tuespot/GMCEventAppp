//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet,StatusBar,BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const EventWebView = ({route,navigation}) => {
    const id =   route.params?.id;
    const webUrl = route.params?.webUrl

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        navigation.navigate('Home',{
            id:id
         })
        return true;
    }


    console.log(webUrl);

    return (
        <View style={styles.container}>
             <StatusBar 
                backgroundColor={"#c7228e"}
            />
            <WebView
                source={{uri: webUrl}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default EventWebView;
