//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';

import { Entypo } from '@expo/vector-icons'; 
 
// create a component
const SponsorDetail = ({route,navigation}) => {

    const eventId = route.params.id;

    return (
       <View style={styles.container}>

        <ScrollView>
           <View style={styles.sponsorData}>
                     <Image
                                source={require('../assets/logo/1.png')}
                                style={{ width: 100, height: 100, borderRadius:50, marginTop:20}}
                            />
               <Text style={styles.boothNo}> 
                <View >
                    <Text style={styles.icone}><Entypo name="location-pin" size={25} color="#ccc" /></Text>
                </View>

                <View><Text style={styles.boothText}> Booth No 5</Text></View>
                
                </Text>
               <Text style={styles.Name}>AEC</Text>
           </View>

           <View style={styles.sponsorDescription}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>AEC@ is the World's most trusted source for 3D measurement, imaging Esri, the global market   
                    leader in geographic information system (GIS) software, offers the most powerful mapping and spatial
                    analytics technology available. Since 1969, Esri had helped.
                </Text>
           </View>

           <View style={styles.sponsorDescription}>
                <Text style={styles.descriptionTitle}>Website</Text>
                <Text style={styles.descriptionText}>
                    www.tuespotsolotuions.com
                </Text>
           </View>
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
           onPress={()=>{navigation.navigate('Schedule1',{
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
    container:{
        flex:1
    },
    sponsorData:{
        backgroundColor:'#fff',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:10
    },
    boothNo:{
        flexDirection:'row',
        fontSize:16,
        marginTop:10,
        borderWidth:2,
        borderColor:'#ccc',
        padding:20
    },
    Name:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:20
    },
    boothText:{
        fontSize:17
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
export default SponsorDetail;
