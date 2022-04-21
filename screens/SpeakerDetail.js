//import liraries
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { eventByIdWithPerfromingAt, eventIdForSpeaker, speakerByEventId, upcomingsImage } from '../config.js/api';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
// cresate a component
const SpeakerDetail = ({ route, navigation }) => {

    // console.log("-------------------------------------");

    //     console.log("Entery Point Speaker Details componenet");

    // console.log("-------------------------------------");

    // console.log("RouteParams "+JSON.stringify(route.params));

    const eventId = route.params.id;
    // const speakerId = route.params.speakerId;


let speakerId = "";

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
            AsyncStorage.getItem("speakerDetailId").then(
              (value)=>{
                console.log("jadhsfkjdakfhds");
                speakerId = value;
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
    const fetchData =  () => {
        console.log("speakerDetailUrl " + eventByIdWithPerfromingAt + speakerId + eventIdForSpeaker + eventId);

        
         axios.get(eventByIdWithPerfromingAt+speakerId+eventIdForSpeaker+eventId).then(
            (respone) => {
                console.log("response block line no 27 "+JSON.stringify(respone.data));
                // console.warn(respone.data);
                setList(respone.data);
            },
            (error) => {
                console.log(error);
            },
           
        ).finally((e)=>{
            console.log("finally block line 36 "+JSON.stringify(e));
        })
    }

    useEffect(() => {
        fetchData();
    }, []);


   // const speakerDetail = list?.speakersEntity;


   // console.log("speakerDetails " + JSON.stringify(list.speakersEntity));



    if (list != null) {

        console.log(" if block line no 54 "+JSON.stringify(list));

        return (
            <SafeAreaView style={styles.parent}>

<View style={styles.container}>

                <View style={styles.speakerImage}>
                    <Image
                        source={{ uri: upcomingsImage + list?.speakersEntity?.imageUrl }}
                        style={{ width: 80, height: 80,padding:10, borderRadius: 50 }}
                    />
                </View>
                <View style={styles.speakerDetails}>
                <View>
                    <Text style={styles.name}>{list?.speakersEntity?.name}</Text>
                </View>
                <View>
                    <Text  style={styles.paraText}>{list?.speakersEntity?.designation}</Text>
                </View>
                <View>
                    <Text  style={styles.paraText}>{list?.speakersEntity?.company}</Text>
                </View>
                </View>
                </View>

                <FlatList
                    data={list?.subSessionEntity}
                    keyExtractor={(itemKey) => { itemKey.id }}
                    renderItem={({ item }) => {
                        return (
                            <View>

                                <View style={styles.presenting}>
                                    <View>
                                        <Text style={styles.presentedTitle}>Presented at</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.presentedTitle}>{item.name}</Text>
                                        <Text style={styles.presentedText}>{item.location}</Text>
                                    </View>
                                </View>
                            </View>

                        )
                    }} />

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

            </SafeAreaView>

        );

    }
    else{
        console.log(" else block line no 54 ");

        return null;
    }

};


// define your styles
const styles = StyleSheet.create({
    // parent: {
    //     flex: 1
    // },
    // container: {
    //     backgroundColor: 'white',
    //     padding: 30,
    //     borderWidth: 2,
    //     borderRadius: 5,
    //     borderColor: "#ccc",
    //     marginHorizontal: 10,
    //     marginVertical: 10

    // },
    // image: {
    //     alignItems: 'center'
    // },

    // nameConationer: {
    //     alignItems: 'center'
    // },

    // name: {
    //     fontSize: 25,
    //     fontWeight: 'bold',
    //     marginVertical: 20,
    // },
    // paragraph: {
    //     alignItems: 'center'
    // },
    // paraText: {
    //     fontSize: 18
    // },

    // presenting: {
    //     backgroundColor: '#ffd6cc',
    //     padding: 25,
    //     borderWidth: 2,
    //     borderRadius: 5,
    //     borderColor: '#ccc',
    //     marginHorizontal: 10

    // },
    // presentedTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     paddingBottom: 10,

    // },
    // presentedText: {
    //     fontSize: 16
    // },

    // dummyDiv: {
    //     backgroundColor: '#FFF',
    //     color: '#fff',
    //     flexDirection: 'row',
    //     padding: 5,
    //     position: 'absolute',
    //     bottom: 0,
    //     zIndex: 10000,
    //     height: 64,
    //     width: "100%"
    // },
    // tabContainer: {
    //     backgroundColor: '#4517b59c',
    //     color: '#fff',
    //     flexDirection: 'row',
    //     padding: 5,
    //     position: 'absolute',
    //     bottom: 0,
    //     zIndex: 100000
    // },
    // div1: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 5
    // },
    // div2: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 5
    // },
    // div3: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 5
    // },
    // div4: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 5
    // },
    // tabText: {
    //     color: '#fff'
    // }


    parent: {
        flex: 1
    },

    speakerImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
    },
    speakerDetails:{
        flex:5,
        paddingLeft:30
    },
    container: {
        backgroundColor: '#ccc',
        padding: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#ccc",
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection:"row"

    },
    image: {
        alignItems: 'center'
    },

    nameConationer: {
        
        alignItems: 'center'
    },

    name: {
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    paragraph: {
        alignItems: 'center'
    },
    paraText: {
        fontSize: 18
    },

    presenting: {
        backgroundColor: '#ffd6cc',
        padding: 25,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ccc',
        marginHorizontal: 10

    },
    presentedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,

    },
    presentedText: {
        fontSize: 16
    },

    dummyDiv: {
        backgroundColor: '#FFF',
        color: '#fff',
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        bottom: 0,
        zIndex: 10000,
        height: 64,
        width: "100%"
    },
    tabContainer: {
        backgroundColor: '#c7228e',
        color: '#fff',
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        bottom: 0,
        zIndex: 100000
    },
    div1: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    div2: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    div3: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    div4: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    tabText: {
        color: '#fff'
    }

});

//make this comsponent available to the app
export default SpeakerDetail;
