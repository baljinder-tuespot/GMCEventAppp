//import liraries
import React, { Component } from 'react';
import {  View, Text, StyleSheet,FlatList, SafeAreaView,ScrollView,Image,Dimensions,Pressable,TouchableOpacity,ImageBackground} from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { baseUrl, SponserCategory } from '../config.js/api';
const images = [
    "http://api.pcstart.in/images/eventPhoto_1650535737699.png",
    "http://api.pcstart.in/images/eventPhoto_1650535838146.png",

    "http://api.pcstart.in/images/eventPhoto_1650535844899.png",
    "http://api.pcstart.in/images/eventPhoto_1650535850833.png",

    "http://api.pcstart.in/images/eventPhoto_1650535858592.png",
    "http://api.pcstart.in/images/eventPhoto_1650535864192.png",

    "http://api.pcstart.in/images/eventPhoto_1650535870968.png",
    "http://api.pcstart.in/images/eventPhoto_1650535876733.png",

    "http://api.pcstart.in/images/eventPhoto_1650535890621.png",
    "http://api.pcstart.in/images/eventPhoto_1650535899803.png",
]


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// create a component
const SpeakerHome = ({route, navigation}) => {

    const eventId = route.params.id
    console.log("line23 "+JSON.stringify(route));


    


    return (
        <View style={styles.container}>

        <View style={styles.wrap}>
            <ScrollView
                onScroll={({nativeEvent}) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
            >
                {
                    images.map((e, index) =>
                    <Image
                    key={e}
                    resizeMode='stretch'
                    style={styles.wrap}
                    source={{uri:e}}
                    />
                    )
                }
            </ScrollView>
            {/* <View style={styles.wrapDot}>
                {
                    images.map((e,index)=>
                        <Text
                            key={e}
                            style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                        .
                        </Text>
                    )
                }
            </View> */}
        </View>

            <ScrollView>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Speakers',{id:eventId,urlId:1})}} style={styles.categoryList}><Text style={styles.categoryText}>Speaker By Name</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SpeakerCategory',{id:eventId,urlId:2})}} style={styles.categoryList}><Text style={styles.categoryText}>Speaker By Tags</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Speakers',{id:eventId})}} style={styles.categoryList}><Text style={styles.categoryText}>Bookmarked Speaker </Text></TouchableOpacity>
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

    categoryContainer:{
        flexDirection:'column'
    },

    categoryList:{
        backgroundColor:'#fff',
        padding:10,
        borderBottomWidth:2,
        borderColor:'#CCC'
    },
    categoryText:{
        fontSize:18,
        padding:10
    },
    container:{
        flex:1,
        
    },
    wrap:{
        width : WIDTH,
        height : HEIGHT * 0.15,
        marginBottom:1
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center',
    },
    dotActive:{
        margin:3,
        fontSize:50,
        color:'black'
    },
    dot:{
        margin: 3,
        fontSize:50,
        color : 'white'
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
export default SpeakerHome;
