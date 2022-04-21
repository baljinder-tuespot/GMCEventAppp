import React,{useState} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, SafeAreaView,ScrollView,Image,Dimensions,Pressable,TouchableOpacity} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



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


const MainScreen = ({navigation}) =>{

    const [imgActive, setimgActive] = useState(0);

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
            
            <View style={styles.pressTabContainer}>
                <View style={styles.tabs}>
                     <View style={styles.tabOne}>
                     <TouchableOpacity onPress={()=>{navigation.navigate('ActivityFeed')}}>
                            <View style={styles.tabImage}>
                                <Text>
                                    <Image
                                        source={require('../assets/img/mobile.png')}
                                        style={{width:20,height:20, borderRadius:50}}
                                    />
                                </Text>
                            </View>
                            <View style={styles.tabText}>
                                <Text>Activity Feed</Text>
                            </View>
                         </TouchableOpacity>
                     </View>
                     <View style={styles.tabTwo}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Speakers')}}>
                            <View style={styles.tabImage}>
                               
                                <Text>
                                    <Image
                                        source={require('../assets/img/microphone.png')}
                                        style={{width:20,height:20, borderRadius:50}}
                                    />
                                </Text>
                               
                            </View>
                            <View style={styles.tabText}>
                                <Text>Speakers</Text>
                            </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.tabThree}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}}>
                            <View style={styles.tabImage}>
                                <Text>
                                <Image
                                        source={require('../assets/img/sponsor.png')}
                                        style={{width:20,height:20, borderRadius:50}}
                                    />
                                </Text>
                            </View>
                            <View style={styles.tabText}>
                                <Text>Sponsors</Text>
                            </View>
                        </TouchableOpacity> 
                     </View>
                     <View style={styles.tabFour}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Exhibitors')}}>
                            <View style={styles.tabImage}>
                                <Text>
                                    <Image
                                            source={require('../assets/img/exhibition.png')}
                                            style={{width:20,height:20, borderRadius:50}}
                                        />
                                </Text>
                            </View>
                            <View style={styles.tabText}>
                                <Text>Exhibitors</Text>
                            </View>
                        </TouchableOpacity>
                     </View>
                </View>
            </View>

        <ScrollView>
            <View style={styles.featureCard}>
               <View>
                   <Text style={styles.featuredText}>FEATURED SPONSORS</Text>
               </View>
               <View style={styles.div2}>
                   <View style={styles.imageDiv}>
                        <Text style={styles.imgOne}>
                            <Image
                                source={require('../assets/img/img3.png')}
                                style={{width:80,height:80}}
                            />
                        </Text>
                        <Text style={styles.imgTwo}>
                        <Image
                                source={require('../assets/img/img3.png')}
                                style={{width:80,height:80}}
                            />
                        </Text>
                       
                   </View>

                   <View style={styles.imageDiv}>
                        <Text style={styles.imgThree}>
                        <Image
                                source={require('../assets/img/img3.png')}
                                style={{width:80,height:80}}
                            />
                        </Text>
                        <Text style={styles.imgFour}>
                        <Image
                                source={require('../assets/img/img3.png')}
                                style={{width:80,height:80}}
                            />
                        </Text>
                   </View>
                
               </View>
               <View>
                    <TouchableOpacity style={styles.viewAllSponsorParentDiv} onPress={()=>{navigation.navigate('Sponsors')}}>
                         <Text style={styles.viewSponsorsText}>View all sponsors</Text>
                         <Text style={styles.viewSponsorsIcone}  ><FontAwesome  name="angle-right"  size={22} color="black" /></Text>
                    </TouchableOpacity>
               
               </View>
            </View>
           
        </ScrollView>

        <View style={styles.dummyDiv}></View>
        <View style={styles.tabContainer}>
           <TouchableOpacity 
           style={styles.div1}
            onPress={()=>{navigation.navigate('EventDetails1')}}
            
            >
                <Text><MaterialIcons name="event" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Event Guide</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div2}
           onPress={()=>{navigation.navigate('Schedule')}}
           >
                <Text><MaterialIcons name="schedule" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Schedule</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div3}
           onPress={()=>{navigation.navigate('Profile1')}}
           >   
                <Text><AntDesign name="profile" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Profile</Text>
           </TouchableOpacity>
           <TouchableOpacity  
           style={styles.div4}
           onPress={()=>{navigation.navigate('More1')}}
           >
                <Text><Feather name="more-horizontal" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>More</Text>
           </TouchableOpacity>
           
       </View>
        </SafeAreaView>


    

       
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey'
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
    featureCard:{
        backgroundColor:'#fff',
        marginTop:10,
        marginHorizontal:10,
        flex:1,
        marginBottom:100
    },
    viewAllSponsorParentDiv:{
        flexDirection:'row',
       
        
        backgroundColor:'lightgrey'
    },
    viewSponsorsText:{
        flex:1,
        marginLeft:30,
    },
    viewSponsorsIcone:{
        marginRight:5,
    },
    featuredText:{
        marginLeft:30,
        marginTop:5,
        borderBottomWidth:1,
        borderBottomColor:'green'
    },
    imageDiv:{
        flexDirection:'row',
        marginBottom:10
    },
    imgOne:{
        flex:2,
        height:130,
        textAlign:'center'
    },
    imgTwo:{
        flex:2,
        height:130,
        textAlign:'center'
    },
    imgThree:{
        flex:2,
        height:130,
        textAlign:'center'
    },
    imgFour:{
        flex:2,
        height:130,
        textAlign:'center'
    },

    pressTabContainer:{
        marginTop:10,
        padding:8,
        backgroundColor:'#fff'
    },

    tabs:{
        flexDirection:'row'
    },
    tabOne:{
        flex:1
    },
    tabTwo:{
        flex:1
    },
    tabThree:{
        flex:1
    },
    tabFour:{
        flex:1
    },

    tabImage:{
        alignItems:'center'
    },
    tabText:{
        alignItems:'center'
    },
    // bottomTab:{
    //     flex: 1,
    //     justifyContent: 'flex-end',
    //     marginBottom: 30
    // }


    dummyDiv: {
        backgroundColor:'#FFF',
        color:'#fff',
        flexDirection:'row',
        padding:5,
        position:'absolute',
        bottom:0,
        zIndex:1000,
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