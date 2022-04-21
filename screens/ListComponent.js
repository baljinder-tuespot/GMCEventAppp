import React, { useState, useEffect } from 'react';
import axios from "axios";
import {View,Text, FlatList,Image, Pressable,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { jsonData } from '../config.js/config';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl, upcomings, upcomingsImage, past } from '../config.js/api';

const ListComponent = ({navigation}) =>{

const [guestStorage, setGuestStorage] = useState()
const [list, setList] = useState([]);
const fetchData=()=>{
axios.get(baseUrl+past).then(
(respone) => {
console.log("Past Event");
console.warn(respone.data);
setList(respone.data);
},
(error) => {
console.log(error);
}
)
}



const localStorageGet = () => {
    try {
      AsyncStorage.getItem("guestLogin").then(
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
    fetchData();
    localStorageGet();
    },[]);

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       console.log('Refreshed!');
    //     });
    //     return unsubscribe;
    //   }, [navigation]);
    
    
    var navUrl="";

    
        if(guestStorage){
            navUrl = "EventDetails1";
        }else{
            navUrl = "UserLogin";  
        }



    return (
        <FlatList
            data={list}
            keyExtractor={(itemKey)=>{itemKey.id}}
            renderItem={({item})=>{

                var timestemp = new Date( item.endDate);
                var timestemp2 = new Date( item.startDate);
               // var formatted = timestemp.format("dd/mm/yyyy hh:MM:ss");

             
               // var month  = timestemp.getMonth();

                function  getReturnDate(month){

                    console.log(month)

                    if(month == 1){
                        return "Jan";
                    }

                    if(month == 2){
                        return "Feb";
                    }
                    if(parseInt(month) == 3){
                        return "Mar";
                    }
                    if(month == 4){
                        return "April";
                    }
                    if(month == 5){
                        return "May";
                    }
                    if(month == 6){
                        return "June";
                    }

                    if(month == 7){
                        return "July";
                    }
                    if(month == 8){
                        return "Aug";
                    }

                    if(month == 9){
                        return "Sep";
                    }

                    if(month == 10){
                        return "Oct";
                    }

                    if(month == 11){
                        return "Nov";
                    }

                    if(month == 12){
                        return "Dec";
                    }
                }


                var startDate = timestemp2.getDate();
                var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();


                return (
                   <TouchableOpacity onPress={()=>navigation.navigate(navUrl,{
                    id:item.id
                 })}>
                        <View style = {[styles.container, item.status === 'Pending' && styles.inProgressBg,item.status === 'close' && styles.closeBg,]}>
                            <View style={styles.imageContainer}>
                                <Image
                                     source={{uri : upcomingsImage+item.logoUrl}}
                                    style={{width:70,height:70, borderRadius:50}}
                                />
                            </View>
                            <View style={styles.contantContainer}>
                                    <Text style = {styles.textTitle}>{item.eventName}</Text>
                                    <Text style = {styles.text}>{startDate} - {endDate}</Text>
                                    <Text style = {styles.text}>{item.location}</Text>
                            </View>

                            <View style={styles.button}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                                       navigation.navigate('UpcomingWebLinks',{
                                           url:item.website
                                       })
                                   }}>
                                <Text style={{color:'#fff',fontSize:16}}><Ionicons name="navigate-outline" size={24} color="#fff" /></Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:5,
        borderColor:"#CCC",
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexDirection:'row',
        backgroundColor:"#CCC",
        paddingHorizontal:10,
        paddingVertical:15,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inProgressBg: {
        backgroundColor:"#A995EB"
    },
    closeBg:{
        backgroundColor:"#F9E0A1"
    },
    imageContainer:{
        borderRadius:50,
        backgroundColor:'#fff',
        padding:5
    },
    contantContainer:{
        paddingLeft:15,
        marginTop:6
        
    },
    text: {
        color:"#000",
        
    },
    textTitle: {
        fontSize:16,
        color:"#000",
        fontWeight:'bold'
    },
    button:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginTop:20,
        display:'none'
    },

    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'red',
        },
})