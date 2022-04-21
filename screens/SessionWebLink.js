//import liraries
import React, { Component,useState,useEffect } from 'react';
import { BackHandler, StyleSheet, View, Text,StatusBar, TouchableOpacity } from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { speakerList } from '../config.js/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const SessionWebLink = ({route,navigation}) => {

    const eventId = route.params.id;
   

    const [webUrl, setWebUrl] = useState();


    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        navigation.navigate('Schedule',{
            id:eventId
         })
        return true;
    }

   
     // console.log("line 25 "+eventId+" "+sessionId)
   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Refreshed!');
      getData();
    });
    return unsubscribe;
  }, [navigation]);
  let session
   const getData = () => {
    try {
        AsyncStorage.getItem("webLink").then(
          (value)=>{
            console.log("value"+value);
            setWebUrl(value)
           
           /*  if(value){
              setGuestStorage(value);
            }
            else {
              setGuestStorage('');
            } */
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
    getData();
},[]);



    console.log("webLink16 "+webUrl);

    return (
            <View style={styles.container}>
            <StatusBar 
                backgroundColor={"#c7228e"}
            />
            <WebView
                source={{uri: webUrl}}
            />

<View style={styles.dummyDiv}></View>
        <View style={styles.tabContainer}>
           <TouchableOpacity 
           style={styles.div1}
            onPress={()=>{navigation.navigate('EventDetails1',{
                id:eventId
            })}}
            
            >
                <Text><FontAwesome name="home" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Home</Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={styles.div2}
           onPress={()=>{navigation.navigate('Schedule',{
            id:eventId
        })}}
           >
                <Text><MaterialIcons name="schedule" size={22} color="#fff" /> </Text>
                <Text style={styles.tabText}>Schedule</Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={styles.div3}
           onPress={()=>{navigation.navigate('Networking',{
            id:eventId
        })}}
           >   
                <Text><AntDesign name="profile" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Networking</Text>
           </TouchableOpacity>
           <TouchableOpacity  
           style={styles.div4}
           onPress={()=>{navigation.navigate('Shuttle',{
            id:eventId
        })}}
           >
                <Text><Ionicons name="md-bus" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Shuttle</Text>
           </TouchableOpacity>
           
       </View>
           </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    dummyDiv: {
        backgroundColor:'#FFF',
        color:'#fff',
        flexDirection:'row',
        padding:5,
        position:'absolute',
        bottom:0,
        zIndex:10000,
        height:64,
        width:"100%"
    },
    tabContainer:{
        backgroundColor:'#c7228e',
        color:'#fff',
        flexDirection:'row',
        padding:5,
        position:'absolute',
        bottom:0,
        zIndex:100000
    },
    div1:{
        flex:1,
        alignItems:'center',
        padding:5
    },
    div2:{
        flex:1,
        alignItems:'center',
        padding:5
    },
    div3:{
        flex:1,
        alignItems:'center',
        padding:5
    },
    div4:{
        flex:1,
        alignItems:'center',
        padding:5
    },
    tabText:{
        color:'#fff'
    }


})

//make this component available to the app
export default SessionWebLink;
