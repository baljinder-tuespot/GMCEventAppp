import React, { useState, useEffect } from 'react';
import axios from "axios";
import {View,Text, FlatList,Image,StatusBar,StyleSheet,TouchableOpacity,SafeAreaView,BackHandler,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { eventUrl, upcomingsImage } from '../config.js/api';



const CurrentAndUpcoming = ({navigation}) =>{

const [guestStorage, setGuestStorage] = useState()

const [list, setList] = useState([]);
const fetchData=()=>{
    console.log(eventUrl);
axios.get(eventUrl).then(
(respone) => {
console.log("upcoming event")
//console.warn(respone.data);
setList(respone.data);
},
(error) => {
console.log(error);
}
)
}


// useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       console.log('Refreshed!');
//       localStorageGet();
//     });
//     return unsubscribe;
//   }, [navigation]);

// const localStorageGet = () => {
//     try {
//       AsyncStorage.getItem("userLoginDetail").then(
//         (value)=>{
//           console.log("dinehs");
//           console.log(value);
//           if(value){
//             setGuestStorage(value);
//           }
//           else {
//             setGuestStorage('');
//           }
//         },
//         (error)=>{
//           console.log(error); 
//         }
//       )
//     } catch (error) {
//       console.log(error);
//     }
  
 
//   }

  useEffect(() => {
    fetchData();
    //localStorageGet();
    },[]);



    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();

    },[])



    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       console.log('Refreshed!');
    //     });
    //     return unsubscribe;
    //   }, [navigation]);
    


    
    // let navUrl="";
   
    // if(guestStorage){
    //     console.log("guestStorage "+guestStorage);
    //     navUrl = "EventDetails1";
    // }else{
        
    //     navUrl = "UserLogin";  
    // }
       
    // console.log(navUrl);

    
    console.log("entity Data "+JSON.stringify(list));



    return (
        <SafeAreaView>
            <StatusBar 
            backgroundColor={"#c7228e"}
        />
            <FlatList
                data={list}
                keyExtractor={(itemKey)=>{itemKey.id}}
                renderItem={({item})=>{

                    var timestemp = new Date( item.endDate);
                    var timestemp2 = new Date( item.startDate);
                   // var formatted = timestemp.format("dd/mm/yyyy hh:MM:ss");

                 
                   // var month  = timestemp.getMonth();

                    function  getReturnDate(month){

                        month = (month+1)
                        console.log("Monthe No : "+(month))

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


                    var startDate = timestemp2.getDate();
                    var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();
                   /**
                    * 
                    * [12:26 AM] Ravinder Kumar
                        getDate() returns the day of the calendar month 1 to 31 at that time.
                        getMonth() returns the month number 0 to 11 at that time.
                        getFullYear() returns the year in 4-digits format.
                        getHours() returns the exact hour in 24-hour format for that time.
                        getMinutes() returns the exact minutes 0 to 59 at that time.
                        getSeconds() returns the exact seconds 0 to 59 at that time.


                    */

                      
                    
                        function checkStatus(status){
                            if(status == "open"){

                                return(
                                    <TouchableOpacity  onPress={()=>{navigation.navigate("AfterEventSplash",{
                                        id:item.id
                                     })}} >
                                             <View style = {[styles.container, item.status === 'Pending' && styles.inProgressBg,item.status === 'Pending' && styles.closeBg,]}>
                                                 <View style={styles.imageContainer}>
                                                     <Image
                                                         source={{uri : upcomingsImage+item.logoUrl}}
                                                         style={{width:55,height:55,  resizeMode: 'contain'}}
                                                     />
                                                 </View>
                                                 <View style={styles.contantContainer}>
                                                     <Text style = {styles.textTitle}>{item.eventName}</Text>
                                                     <Text style = {styles.text}>{startDate} - {endDate}</Text>
                                                     <Text style = {styles.text}>{item.location}</Text>
                                                 </View>
                 
                                                 <View style={styles.button}>
                                                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                                                        navigation.navigate('UpcomingWebLinks',{
                                                            url:item.website
                                                        })
                                                    }}>
                                                        <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
                                                    </TouchableOpacity>
                                                 </View>
                                             </View>
                                         </TouchableOpacity>
                                       )

                            }else if(item.url != ""){

                                return (
                                    <TouchableOpacity  onPress={()=>{navigation.navigate("EventWebView",{
                                        id:item.id,
                                        webUrl:item.url
                                     })}} >
                                             <View style = {[styles.container, item.status === 'Pending' && styles.inProgressBg,item.status === 'Pending' && styles.closeBg,]}>
                                                 <View style={styles.imageContainer}>
                                                     <Image
                                                         source={{uri : upcomingsImage+item.logoUrl}}
                                                         style={{width:55,height:55,  resizeMode: 'contain'}}
                                                     />
                                                 </View>
                                                 <View style={styles.contantContainer}>
                                                     <Text style = {styles.textTitle}>{item.eventName}</Text>
                                                     <Text style = {styles.text}>{startDate} - {endDate}</Text>
                                                     <Text style = {styles.text}>{item.location}</Text>
                                                 </View>
                 
                                                 <View style={styles.button}>
                                                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                                                        navigation.navigate('UpcomingWebLinks',{
                                                            url:item.website
                                                        })
                                                    }}>
                                                        <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
                                                    </TouchableOpacity>
                                                 </View>
                                             </View>
                                         </TouchableOpacity>
                                )

                            }else{
                                return (
                                <TouchableOpacity >
                                         <View style = {[styles.container, item.status === 'Pending' && styles.inProgressBg,item.status === 'Pending' && styles.closeBg,]}>
                                             <View style={styles.imageContainer}>
                                                 <Image
                                                     source={{uri : upcomingsImage+item.logoUrl}}
                                                     style={{width:55,height:55, resizeMode: 'contain'}}
                                                 />
                                             </View>
                                             <View style={styles.contantContainer}>
                                                 <Text style = {styles.textTitle}>{item.eventName}</Text>
                                                 <Text style = {styles.text}>{startDate} - {endDate}</Text>
                                                 <Text style = {styles.text}>{item.location}</Text>
                                             </View>
             
                                             <View style={styles.button}>
                                                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                                                    navigation.navigate('UpcomingWebLinks',{
                                                        url:item.website
                                                    })
                                                }}>
                                                    <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
                                                </TouchableOpacity>
                                             </View>
                                         </View>
                                     </TouchableOpacity>

                                )
                            }
                        }
                  

                    return (
                        <View>
                            {checkStatus(item.status)}
                        </View>
                    )
                }}
            />
        </SafeAreaView>












        // <SafeAreaView>
        //     <StatusBar 
        //     backgroundColor={"#4517b5d1"}
        //     />
        // <FlatList
        //     data={jsonData}
        //     keyExtractor={(itemKey)=>{itemKey.id}}
        //     renderItem={({item})=>{
        //         return (

                    





                   
        //            <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
        //              {item.status === 'open' && <ImageBackground source={require('../assets/img/open.jpg')} resizeMode="cover" style={styles.image}>
        //              <View style={styles.subContainer}>
        //                     <View style={styles.contantContainer}>
        //                         <Text style = {styles.text}>{item.title}</Text>
        //                         <Text style = {styles.text}>{item.date}</Text>
        //                         <Text style = {styles.text}>{item.location}</Text>
        //                     </View>
        //                     <View style={styles.button}>
        //                         <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
        //                             navigation.navigate('UpcomingWebLinks',{
        //                                 url:'https://geosmartinfrastructure.net/'
        //                             })
        //                         }}>
        //                             {/* <Text style={{color:'#fff',fontSize:16}}>
        //                             <Image
        //                                 source={require('../assets/img/newGif.gif')}
        //                                 style={{ width: 60, height: 60, borderRadius:50 }}
        //                             />
        //                             </Text> */}
        //                             <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </ImageBackground>
        //     }
        //     {item.status === 'close' && <ImageBackground source={require('../assets/img/Close.jpg')} resizeMode="cover" style={styles.image}>
        //                  <View style={styles.subContainer}>
        //                     <View style={styles.contantContainer}>
        //                         <Text style = {styles.text}>{item.title}</Text>
        //                         <Text style = {styles.text}>{item.date}</Text>
        //                         <Text style = {styles.text}>{item.location}</Text>
        //                     </View>
        //                     <View style={styles.button}>
        //                         <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
        //                             navigation.navigate('UpcomingWebLinks',{
        //                                 url:'https://geospatialworldforum.org/'
        //                             })
        //                         }}>
        //                             <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </ImageBackground>
        //     }
        //     {item.status === 'inProgress' && <ImageBackground source={require('../assets/img/inProgress.jpg')} resizeMode="cover" style={styles.image}>
        //                     <View style={styles.subContainer}>
        //                         <View style={styles.contantContainer}>
        //                             <Text style = {styles.text}>{item.title}aaaaa</Text>
        //                             <Text style = {styles.text}>{item.date}</Text>
        //                             <Text style = {styles.text}>{item.location}</Text>
        //                         </View>
        //                         <View style={styles.button}>
        //                         <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
        //                             navigation.navigate('UpcomingWebLinks',{
        //                                 url:'https://www.geospatialworld.net/geointelligence/2022/'
        //                             })
        //                         }}>
        //                             <Text style={{color:'#fff',fontSize:16}}><FontAwesome5 name="globe" size={24} color="#fff" /></Text>
        //                         </TouchableOpacity>
        //                         </View>
        //                     </View>
        //             </ImageBackground>
        //     }
        //                 {/* <View style = {styles.container}>
        //                     <View style={styles.imageContainer}>
        //                         <Image
        //                             source={require('../assets/img/img1.png')}
        //                             style={{width:70,height:70, borderRadius:50}}
        //                         />
        //                     </View>
        //                     <View style={styles.contantContainer}>
        //                         <Text style = {styles.text}>{item.title}</Text>
        //                         <Text style = {styles.text}>{item.date}</Text>
        //                         <Text style = {styles.text}>{item.location}</Text>
        //                     </View>
        //                 </View> */}

                           
        //             </TouchableOpacity>
        //         )
        //     }}
        // />
        // </SafeAreaView>
    )
}

export default CurrentAndUpcoming;

const styles = StyleSheet.create({
    // container: {
    //     flex:1,
    //     borderWidth:1,
    //     marginHorizontal:10,
    //     marginVertical:5,
    //     borderRadius:5,
    //     borderColor:"#CCC",
    //     alignItems:'flex-start',
    //     justifyContent:'flex-start',
    //     flexDirection:'row',
    //     backgroundColor:"#FFF",
    //     paddingHorizontal:10,
    //     paddingVertical:15,
    //     shadowOffset: {width: -2, height: 4},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 3,
    // },
    // imageContainer:{

    // },
    // image: {
    //     justifyContent: "center",
    //     flex:1,
    //     padding:20,
    //     marginBottom:5
    //   },
    // contantContainer:{
        
    //     paddingLeft:15, 
    // },
    // text: {
    //     color:"#FFF",
    //     fontWeight:'bold'
    // },

    // subContainer:{
    //     flexDirection:'row'
    // },

    // button:{
    //     flex:1,
    //     alignItems:'flex-end',
    //     justifyContent:'center',
       
    // },

    // buttonStyle:{
    //     alignItems: 'flex-end',
    //     justifyContent: 'center',
    //     paddingVertical: 2,
    //     paddingHorizontal: 2,
      
    //     borderRadius: 50,
    //     elevation: 3,
    //     backgroundColor: '#ff0000',
    //     },


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
        backgroundColor:"#CCC",
        paddingHorizontal:10,
        paddingVertical:15,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inProgressBg: {
        backgroundColor:"#A995EB"
    },
    closeBg:{
        backgroundColor:"#F9E0A1"
    },
    imageContainer:{
        borderRadius:50,
        backgroundColor:'#fff',
        padding:8,
       
    },
    contantContainer:{
        paddingLeft:15,
        marginTop:6
        
    },
    text: {
        color:"#000",
        
    },
    textTitle: {
        fontSize:16,
        color:"#000",
        fontWeight:'bold'
    },
    button:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginTop:20,
        display:'none'
    },

    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'red',
        },
})