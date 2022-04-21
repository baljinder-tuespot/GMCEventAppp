import React,{useState} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, FlatList,TouchableOpacity,Picker} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { schedule, sponserList } from '../config.js/config';
import SpeakerSponsorList from '../Components/SpeakerSponsorList';

// create a component
const MySchedule = ({route,navigation}) => {
    const eventId = route.params.id;
    return (
        <View style={styles.container}>
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
    }

});

//make this component available to the app
export default MySchedule;
