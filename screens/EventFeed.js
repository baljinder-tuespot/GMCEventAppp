
import React,{useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView,ScrollView,Image,Dimensions,Pressable,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
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



const EventFeed = ({route,navigation}) =>{



    const list = route.params.data
    
    const eventId = route.params.id



   const onChange = (nativeEvent) => {
        // if(nativeEvent){
        //     const slide = Math.ceil(nativeEvent.contentOfSet.x / nativeEvent.layobutMeasurement.width);
        //     if(slide != imgActive){
        //         setimgActive(slide);
        //     }
        // }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Carousel data = {dummyData}/>
        <View style={styles.wrap}>
            {/* <ScrollView
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
        </View>


           
            <WebView
                source={{uri: "https://www.facebook.com/GeospatialMedia"}}
            />
           

        {/* <ScrollView>
        <View style={styles.card}>
        <View style={styles.shortDetail}>
            <View style={styles.div1}>
                <Image
                    source={require('../assets/img/ActivityFeed.webp')}
                    style={{width:70,height:70, borderRadius:50}}
                />
            </View>
                
            <View style={styles.divText}>
                <View><Text style={styles.title}>Basha Menk</Text></View>
                <View><Text>12/08/2020</Text></View>
                <View style={styles.shairedText}>
                    <Text>Shared from</Text>
                    <Text style={styles.shairedLink}>GeoSmart India</Text>
                </View>
            </View>
        </View>
        
        <View>
            <View style={styles.image}>
                <Image
                        source={require('../assets/img/ActivityFeed.webp')}
                        style={{width:325,height:300,marginHorizontal:5, marginVertical:5}}
                    />
            </View>
            <View style={styles.hashTagDiv}>
                <Text style={styles.hashTags}>#GeoSmartIndia</Text>
                <Text style={styles.hashTags}>#GeoSmartIndia</Text>
            </View>
        </View>
        
        </View>
    </ScrollView> */}

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
                <Text><AntDesign name="profile" size={24} color="#fff" /></Text>
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

export default EventFeed;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e2e2e2'
    },
    wrap:{
        width : WIDTH,
        height : HEIGHT * 0.15
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
    card:{
        backgroundColor:'#fff',
        marginTop:10,
        marginHorizontal:10,
        marginBottom:10
    },
    image:{
        marginTop:10,
        alignItems:'center'
        
    },
    shortDetail:{
       flexDirection:'row'
    },
    div1:{
        flex:1,
        padding:10
    },
    divText:{
        flex:4,
        padding:10,
        
    },
    shairedText:{
        flex:2,
        flexDirection:'row',
        
    },
    title:{
        fontWeight:'bold',
        fontSize:16
    },
    shairedLink:{
        paddingLeft:5,
        color:'skyblue',
        fontWeight:'bold',
        
    },
    hashTagDiv:{
        
        flexDirection:'row',
        marginBottom:10
    },
    hashTags:{
        paddingHorizontal:10,
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
    },

   


})