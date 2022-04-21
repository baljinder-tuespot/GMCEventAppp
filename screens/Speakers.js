import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity,BackHandler } from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { speaker, speakerByEventId, speakerCatId, upcomingsImage } from '../config.js/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Speakers = ({route, navigation}) =>{

   
    const eventId = route.params.id;
   
    var urlId = route.params.urlId;

    console.log(JSON.stringify(route));

    const [list, setList] = useState([""]);

    var finalUrl ="";

    if(urlId == 1){
   // console.log("Event Id is on Speaker Page "+route.params.id);
    finalUrl = speakerByEventId+route.params.id;

    }else if(urlId == 2){
  
    const catId = route.params.catId;
    finalUrl = speakerCatId+catId;


    }else{
        finalUrl = speaker;
    }
    
    

   // console.log(finalUrl);


    const fetchData=()=>{

        console.log(finalUrl)
    axios.get(finalUrl).then(
    (respone) => {
    // console.log(respone.data);

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


    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        navigation.navigate('EventDetails1',{
            id:eventId
         })
        return true;
    }

    const speakerMethod = async (speakerId) => {
        console.log(speakerId);
        console.log("method ")
        AsyncStorage.removeItem("spkId");
        await AsyncStorage.setItem("spkId", ''+speakerId);
            navigation.navigate("SpeakerDetailByName",{
                id:eventId,
                speakerId:speakerId
            })

    }

   // console.log("Data Speaker "+JSON.stringify(list));

    return (
        <View style={styles.container}>


<FlatList
            data={list}
            keyExtractor={(itemKey) => { itemKey.id }}
            renderItem={({ item }) => {

               
              
                
                return (

                    
                    
                    <TouchableOpacity style={styles.speakercontainer} onPress={()=>speakerMethod(item.id)}>

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

        {/* <SpeakerSponsorList options={{"navigate":"SpeakerDetailByName","speakerData":list, "eventId":eventId}} /> */}

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
    )
}

export default Speakers;

const styles = StyleSheet.create({

    container:{
        flex:1
    },


    speakercontainer: {
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