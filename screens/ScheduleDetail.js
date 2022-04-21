import React, { useState, useEffect } from 'react';
import axios from "axios";
import {  View, Text,Image, StyleSheet, FlatList,TouchableOpacity,Picker } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { getSeesionByEventIdAndSessionId, sessionIdURl, upcomingsImage } from '../config.js/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const ScheduleDetail = ({route,navigation}) => {

    //const data = subsession;

    console.log(route);
    console.log("ScheduleDetail dsfdf");
    const eventId = route.params?.id;
    let sessionId = '';


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
        AsyncStorage.getItem("sessionStoreId").then(
          (value)=>{
            console.log("jadhsfkjdakfhds");
            sessionId = value;
            fetchData();
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
    
    const [list, setList] = useState([]);
    const fetchData=()=>{
      console.log("url30 "+getSeesionByEventIdAndSessionId+eventId+sessionIdURl+sessionId);
    axios.get(getSeesionByEventIdAndSessionId+eventId+sessionIdURl+sessionId).then(
    (respone) => {
    console.warn(respone.data);
    setList(respone.data);
    },
    (error) => {
    console.log(error);
    }
    )
    }

    useEffect(() => {
         fetchData();
    },[]);



    const subSessionNavigateMethod = async (sessionId,scheduleName) => {
        console.log(sessionId);
        console.log("method ")
        AsyncStorage.removeItem("SubSessionDetailId");
        await AsyncStorage.setItem("SubSessionDetailId", ''+sessionId);
        navigation.navigate('SubSessionDetail', {
            id:eventId,
            sessionId:sessionId,
            subSessionName : scheduleName
            })
    }


    const speakerNavigateMethod = async (speakerId) =>{
        console.log(sessionId);
        console.log("method ")
        AsyncStorage.removeItem("speakerDetailId");
        await AsyncStorage.setItem("speakerDetailId", ''+speakerId);
        navigation.navigate('SpeakerDetail', {
            id:eventId,
            speakerId:sessionId,
        
            })
    } 
   

    var timestemp = new Date( list?.sessionsEntity?.endTime);
    var timestemp2 = new Date( list?.sessionsEntity?.startTime);



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


    var startTime = timestemp2.getHours()+":"+timestemp2.getMinutes()+" am";

    var endTime = timestemp.getHours()+":"+timestemp.getMinutes()+" pm";

    var startDate = timestemp2.getDate()+" "+getReturnDate(timestemp.getMonth());
    var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();


    return (
        <View style={styles.container}>
            <ScrollView style={styles.bottomMargin}>
        
                    <View style={styles.details}>
                    <Text style={styles.location}><Entypo name="location-pin" size={25} color="#ccc" />{list?.sessionsEntity?.location}</Text>
                    <Text style={styles.text}>{startDate}, {startTime} - {endTime}</Text>
                    <Text style={styles.title}>{list?.sessionsEntity?.name}</Text>
                    <Text>{list?.sessionsEntity?.sessionCategoryEntity?.sessionCategory}</Text>
                     </View>
    
                    <View style={styles.sponsorDescription}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText}>
                            {list?.sessionsEntity?.description}
                        </Text>
                    </View>

                    <View style={styles.sessionDetails}>
                            <Text style={styles.sessionText}>Sub Session</Text>
                    </View>


           <FlatList 
                data={list?.subSessionList}
                keyExtractor={(itemKey)=>{itemKey.id}}
                renderItem={({item})=>{

                    var timestemp = new Date( item.endTime);
                    var timestemp2 = new Date( item.startTime);


                        console.log("line no 113 "+timestemp)


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


                    var startTime = timestemp2.getHours()+":"+timestemp2.getMinutes()+" am";

                    var endTime = timestemp.getHours()+":"+timestemp.getMinutes()+" pm";

                    var startDate = timestemp2.getDate()+" "+getReturnDate(timestemp.getMonth());
                    var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();

                    return(
                        <TouchableOpacity style={styles.listContainer} onPress={()=>{subSessionNavigateMethod(item.id, item.name)}}>
                            <View style={styles.flexDiv2}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.subtitle}>{item.location}</Text>
                                <Text style={styles.subtitle}>{endDate} , {startTime} -{endTime}  </Text>
                            </View>
                            
                        </TouchableOpacity>
                    )
                }}
           />


                <View style={styles.sessionDetails}>
                    <Text style={styles.sessionText}>Speaker List</Text>
                </View>
            
           
            <FlatList
            data={list?.speakerSessionList}
            keyExtractor={(itemKey) => { itemKey.id }}
            renderItem={({ item }) => {

              

                
                return (

                    
                    
                    <TouchableOpacity style={styles.containerSpeaker} onPress={()=>{speakerNavigateMethod(item.id)}}>

                        <View style={styles.listImage}>
                        <Image
                         source={{uri : upcomingsImage+item.imageUrl}}
                            style={{ width: 60, height: 60, borderRadius:50 }}
                        />
                        </View>

                        <View style={styles.listText}>
                            <View><Text style={styles.nameText}>{item.name}</Text></View>
                            <View><Text style={styles.descText}>{item.designation}</Text></View>
                        </View>

                    </TouchableOpacity>

                )
            }}
        />

           </ScrollView>



           <View style={styles.dummyDiv}></View>
        <View style={styles.tabContainer}>
           <TouchableOpacity 
           style={styles.div1}
            onPress={()=>{navigation.navigate('EventDetails1',{
                id:eventId
            })}}
            
            >
                <Text><MaterialIcons name="event" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Event Guide</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div2}
           onPress={()=>{navigation.navigate('Schedule',{
            id:eventId
        })}}
           >
                <Text><MaterialIcons name="schedule" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Schedule</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div3}
           onPress={()=>{navigation.navigate('Profile1',{
            id:eventId
        })}}
           >   
                <Text><AntDesign name="profile" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Profile</Text>
           </TouchableOpacity>
           <TouchableOpacity  
           style={styles.div4}
           onPress={()=>{navigation.navigate('More1',{
            id:eventId
        })}}
           >
                <Text><Feather name="more-horizontal" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>More</Text>
           </TouchableOpacity>
           
       </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

    containerSpeaker: {
        flex:1,
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:5,
        borderColor:"#CCC",
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexDirection:'row',
        backgroundColor:"#FFF",
        paddingHorizontal:10,
        paddingVertical:2,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    listImage: {
        flex: 1,
        padding: 15
    },
    listText: {
        flex: 4,
        padding: 15
    },
    icone: {
        flex: 1,
        padding: 25,
        alignItems: 'flex-end'

    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft:5
    },
    descText: {
        fontSize: 16,
        paddingLeft:5
    },




    container: {
        flex: 1,
    },
    bottomMargin:{
        marginBottom:80,
    },
    details:{
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:10,
    },
    location:{
        borderWidth:2,
        borderColor:'#ccc',
        padding:10,
        fontSize:18,
        fontWeight:"bold",
        marginVertical:5
    },
    text:{
        fontSize:18,
        color:"#ccc",
        marginVertical:1
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginVertical:1
    },
    sponsorDescription:{
        backgroundColor:'#fff',
        padding:20,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:10
    },
    descriptionTitle:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10
    },
    descriptionText:{
        textAlign:'justify',
        fontSize:17
    },
    sessionDetails:{
        backgroundColor:'#4517b59c',
        padding:20,
        alignItems:'center',
        
        
    },
    sessionText:{
        color:'#fff',
        fontSize:20
        
    },

    listContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:20,
        marginHorizontal:10,
        marginVertical:10,
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius:10,
       
    },
    flexDiv1:{
        flex:1,
        alignItems:'center',
    },
    flexDiv2:{
        flex:2,
    },
    flexDiv3:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
        
    },

    Time:{
        color      : "#ccc",
        fontWeight : 'bold',
        fontSize   :  16
    },
    subtitle:{
        fontSize:16
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
        backgroundColor:'#4517b59c',
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
export default ScheduleDetail;
