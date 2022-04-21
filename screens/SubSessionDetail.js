import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList,ScrollView,TouchableOpacity,Picker,Image} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { schedule, speakerList, sponserList } from '../config.js/config';
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { getSeesionByEventIdAndSessionId, sessionIdURl, subSessionBySubSessionId, upcomingsImage } from '../config.js/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const SubSessionDetail = ({route,navigation}) => {
    const eventId = route.params.id;
    let sessionId = "";


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          getData();
        });
        return unsubscribe;
      }, [navigation]);


    const getData = () => {
        try {
            AsyncStorage.getItem("SubSessionDetailId").then(
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
    

   
console.log(sessionId);
console.log("SubSessionDetailddinesh");
        console.log("subSessionDetailsParams17 "+JSON.stringify(route));
        

    const [list, setList] = useState([]);
    const fetchData=()=>{
       console.log("url30 "+subSessionBySubSessionId+sessionId);
    axios.get(subSessionBySubSessionId+sessionId).then(
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




        console.log("line42 "+JSON.stringify(list?.speakerList));



        var timestemp = new Date( list?.endTime);
        var timestemp2 = new Date( list?.startTime);



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
           
            <ScrollView style={styles.bottomSpace}>
           <View style={styles.details}>
                <Text style={styles.location}><Entypo name="location-pin" size={25} color="#ccc" />{list?.location}</Text>
                <Text style={styles.text}>{endDate} , {startTime} - {endTime}</Text>
                <Text style={styles.title}>{list?.name}</Text>
                {/* <Text>{list.location}</Text> */}
            </View>

            <View style={styles.sponsorDescription}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>FARO@ is the World's most trusted source for 3D measurement, imaging Esri, the global market   
                    leader in geographic information system (GIS) software, offers the most powerful mapping and spatial
                    analytics technology available. Since 1969, Esri had helped.
                </Text>
           </View>

           <View style={styles.sessionDetails}>
                <Text style={styles.sessionText}>Speakers</Text>
           </View>

           <FlatList
            data={list?.speakerList}
            keyExtractor={(itemKey) => { itemKey.id }}
            renderItem={({ item }) => {

                
                return (

                    
                    
                    <TouchableOpacity style={styles.containerSpeaker} onPress={()=>speakerNavigateMethod(item.id)}>

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

    bottomSpace:{
        marginBottom:80
    },

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
        padding: 5
    },
    listText: {
        flex: 5,
        padding: 10
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
        padding:20,
        fontSize:18,
        fontWeight:"bold",
        marginVertical:20
    },
    text:{
        fontSize:20,
        color:"#ccc",
        marginVertical:5
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:5
    },
    sponsorDescription:{
        backgroundColor:'#fff',
        padding:20,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:10,
        display:'none'
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
        paddingHorizontal:10,
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
export default SubSessionDetail;
