import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, BackHandler, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dummyData from '../config.js/data';
import  Carousel from '../Components/Carousel';


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


const EventDetails = ({ route, navigation }) => {
    const [imgActive, setimgActive] = useState(0);
    const [guestStorage, setGuestStorage] = useState();
    const localStorageGet = () => {
        try {
          AsyncStorage.getItem("guestLogin").then(
            (value)=>{
              if(value){
                  console.log(guestStorage);
                  console.log("guestStorage");
                setGuestStorage(value);
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
         localStorageGet()
      },[])



      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        navigation.navigate('Home',{
            id:eventId
         })
        return true;
    }




    //   useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       console.log('Refreshed!');
    //     });
    //     return unsubscribe;
    //   }, [navigation]);

    const eventId = route.params.id

    console.log("event id on Event Details page " + eventId);

   

    
      

    const onChange = (nativeEvent) => {
        // if(nativeEvent){
        //     const slide = Math.ceil(nativeEvent.contentOfSet.x / nativeEvent.layobutMeasurement.width);
        //     if(slide != imgActive){
        //         setimgActive(slide);
        //     }
        // }
    }





    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //       );
      
    //       return () => backHandler.remove();

    // },[])










    return (
        <SafeAreaView style={styles.container}>

            <Carousel data = {dummyData}/>
            {/* <View style={styles.wrap}> */}
                {/* <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
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
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView> */}
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
            {/* </View> */}

            {/* <ImageBackground source={require('../assets/img/Close.jpg')} resizeMode="cover" style={styles.image}> */}
            <ScrollView>
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.links} onPress={()=>{navigation.navigate("About",{
                        id:eventId
                    })}}>
                        <View style={styles.divRound}>
                            <Text><AntDesign name="exclamationcircleo" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>About</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate("Schedule", {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><MaterialIcons name="schedule" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Schedule</Text>
                    </TouchableOpacity>
                    
                    {!guestStorage && <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate ("Networking", {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><MaterialCommunityIcons name="account-network" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Networking</Text>
                    </TouchableOpacity>
                    }

                   


                    <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate('SpeakerHome', {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><MaterialCommunityIcons name="speaker" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Speakers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate('Exhibitors', {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><MaterialIcons name="location-city" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Exhibitors</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate('Sponsors', {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><Feather name="user" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Sponsors</Text>
                    </TouchableOpacity>
                   

                    <TouchableOpacity style={styles.links} onPress={()=>{navigation.navigate('Profile1',{
                        id: eventId
                    })}}>
                        <View style={styles.divRound}>
                            <Text><FontAwesome name="user-circle" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>My Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.links} onPress={() => {
                        navigation.navigate('ActivityFeed', {
                            id: eventId
                        })
                    }}>
                        <View style={styles.divRound}>
                            <Text><FontAwesome name="list-alt" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Activity Feed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.links} onPress={()=>{navigation.navigate("AccomodationStack",{id:eventId})}}>
                        <View style={styles.divRound}>
                        <Entypo name="address" size={32} color="#fff" />
                            {/* <Text><FontAwesome name="search" size={32} color="#fff" /></Text> */}
                        </View>
                        <Text style={styles.text}>Accommodation</Text>
                    </TouchableOpacity>
                </View>


                {/* <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.links}>
                        <View style={styles.divRound}>
                            <Text><Entypo name="creative-commons-sharealike" size={32} color="#fff" /></Text>
                        </View>
                        <Text style={styles.text}>Favourite</Text>
                    </TouchableOpacity>


                </View> */}

            </ScrollView>
            {/* </ImageBackground> */}
            

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
                <Text><MaterialCommunityIcons name="account-network" size={24} color="#fff" /></Text>
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
        </SafeAreaView>

    )
}

export default EventDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'

    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.15,
        backgroundColor:'#fff',
        borderBottomWidth:0.5,
        borderBottomColor:'#000'
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        fontSize: 50,
        color: 'black'
    },
    dot: {
        margin: 3,
        fontSize: 50,
        color: 'white'
    },

    linkContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor:'#fff'

    },
    links: {
        width:"28%",
        margin:"2%",
        height:90,
        justifyContent:'center',
        alignItems:'center'
        
        //    borderRadius:50,
        //     borderWidth:5,
        //     borderColor:'#fff',
        //     margin:10
    },
    text: {
        fontSize: 14,
        color: "#000"
    },
    image: {
        flex: 1,
    },

    divRound: {
        alignItems: 'center',

        borderRadius: 50,
        padding: 10,
        backgroundColor: '#c7228e'
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