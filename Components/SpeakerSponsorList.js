import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EventGuidBottomTab } from './Routes';
import { upcomingsImage } from '../config.js/api';


function SpeakerSponsorList(props) {


    
const navigation = useNavigation();
const nav = props.options.navigate;

const eventId = props.options.eventId

const speakerData = props.options.speakerData;
//console.log("eventIdRecord "+eventId);

//console.log(speakerData);


const navigateMethod = async (speakerId) => {
    console.log(speakerId);
    console.log("method ")
    AsyncStorage.removeItem("speakerId");
    await AsyncStorage.setItem("speakerId", ''+speakerId);
        navigation.navigate(nav,{
            id:eventId,
            speakerId:speakerId
        })
}



 const [speakerList , setSpeakerList ] = useState(speakerData);


   // console.log(speakerList);

    return (
        <FlatList
            data={speakerData}
            keyExtractor={(itemKey) => { itemKey.id }}
            renderItem={({ item }) => {

                function checkIconeStatus() {
                    if (item.icone == "true") {
                        return (
                            <Text><Ionicons name="md-bookmark" size={24} color="#e2e2e2" /></Text>
                        )
                    }else {
                        return (
                            <Text></Text>
                        )
                    }
                }

                function imageSelect(){
                    if(nav.sponsorFlag == 1){
                        return(
                            <Image
                            source={require('../assets/logo/1.png')}
                            style={{ width: 60, height: 60, borderRadius:50 }}
                        />

                        )
                    }else{
                        return(
                           
                        <Image
                        source={{uri : upcomingsImage+item.imageUrl}}
                            style={{ width: 60, height: 60, borderRadius:50 }}
                        />
                        )
                    }
                }
                console.log(item);
                return (

                    
                    
                    <TouchableOpacity style={styles.container} onPress={()=>{navigateMethod(item.id)}}>

                        <View style={styles.listImage}>
                        {imageSelect()}
                        </View>

                        <View style={styles.listText}>
                            <View><Text style={styles.nameText}>{item.name}</Text></View>
                            <View><Text style={styles.descText}>{item.designation}</Text></View>
                        </View>
                        <View style={styles.icone}>
                            {checkIconeStatus()}
                        </View>


                    </TouchableOpacity>

                )
            }}
        />
    )
}

export default SpeakerSponsorList;

const styles = StyleSheet.create({

    // dummyDiv: {
    //     backgroundColor:'#FFF',
    //     color:'#fff',
    //     flexDirection:'row',
    //     padding:5,
    //     position:'absolute',
    //     bottom:0,
    //     zIndex:10000,
    //     height:64,
    //     width:"100%"
    // },

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
    }
})