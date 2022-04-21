import React, { Component,useEffect, useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView,Image,StatusBar,ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const AfterEventSplash = ({route,navigation}) => {

    const eventId = route.params?.id;

    const [guestStorage, setGuestStorage] = useState()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          localStorageGet();
        });
        return unsubscribe;
      }, [navigation]);
    
    const localStorageGet = () => {
        try {
          AsyncStorage.getItem("userLoginDetail").then(
            (value)=>{
              console.log("dinehs");
              console.log(value);
              if(value){
                setGuestStorage(value);
              }
              else {
                setGuestStorage('');
              }
            },
            (error)=>{
              console.log(error); 
            }
          )
        } catch (error) {
          console.log(error);
        }
      
     
      }
    
      useEffect(() => {
        localStorageGet();
    },[]);


        let navUrl="";
   
    if(guestStorage){
        console.log("guestStorage "+guestStorage);
        navUrl = "EventDetails1";
    }else{
        navUrl = "UserLogin";  
    }



    setTimeout(() => {
        navigation.navigate(navUrl,{id:eventId}) 
    },5000);



    return (
        <View style={styles.container}>
                <StatusBar 
                backgroundColor={"#c7228e"}
                />
                <View style={styles.img}>
                    <Image
                        source={require('../assets/splashScreen/afterEventSplash.jpg')} 
                               
                /> 
                <View>
                    {/* <ActivityIndicator  color="#2c3e50" size={50}/> */}
                </View>
                </View>
            </View> 
    );
};

// define your styles
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

//make this component available to the app
export default AfterEventSplash;
