import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView,Image,StatusBar,ActivityIndicator } from 'react-native';

const SplashScreen = ({navigation}) => {

    
        setTimeout(() => {
            navigation.navigate("Home") 
        }, 2000);

    return (
       
           
            <View style={styles.container}>
                <StatusBar 
                backgroundColor={"#2c3e50"}
                />
                <View style={styles.img}>
                    <Image
                        source={require('../assets/splashScreen/splash2.jpg')} 
                               
                /> 
                <View>
                    {/* <ActivityIndicator  color="#2c3e50" size={50}/> */}
                </View>
                </View>
            </View> 
         );
    };

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'#fff'
    },
    img:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default SplashScreen;
