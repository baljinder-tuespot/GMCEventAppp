import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,StatusBar, BackHandler} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// create a component
const Networking = ({ route, navigation }) => {





    console.log(route);

    const url = route.params;
    const eventId = route.params.id




    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        navigation.navigate('EventDetails1',{
            id:eventId
         })
        return true;
    }



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
              console.log("line no 50 "+JSON.parse(value));
              if(value){
                setGuestStorage(JSON.parse(value));
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

      

    //    refId

        console.log("networking "+JSON.stringify(guestStorage));

        console.log("line 90 "+guestStorage?.refId);

    return (
        <View style={styles.container}>
        <StatusBar 
            backgroundColor={"#c7228e"}
        />
        <WebView
            source={{uri:"https://nw.geospatialmedia.net/Login.aspx?c=GWF22&e=400766&id="+guestStorage?.refId}}
            
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

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
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

});


//make this component available to the app
export default Networking;
