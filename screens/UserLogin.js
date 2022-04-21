import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, SafeAreaView, Button, StyleSheet,ScrollView,Image,Dimensions, TextInput,TouchableOpacity } from 'react-native';
import { baseUrl, loginUrl, loginUrlBase } from '../config.js/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocation } from 'react-router';
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


function UserLogin({ route, navigation}) {

  const list = route.params?.data;

  console.log("data23"+list);


  console.log("line no 39 "+JSON.stringify(dummyData));



  const logoutId = route.params?.logout;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userLogin, setUserLogin] = useState();


  const userLoginFun = () => {
    axios.get(loginUrlBase + "attendees/login/?email=" + username + "&password=" + password + "").then(
      (respone) => {
        console.warn(JSON.stringify(respone.data));
        if(respone.data.authenticate == true){
          setUserLogin(JSON.stringify(respone.data));
          loginLocalStorage();
        }else{
          alert("Wrong Credientials ! Please Try Again !!!");
        }
       
      },
      (error) => {
        console.log(error);
      }
    )   
  }


  const eventId = route.params.id;
  
 const loginLocalStorage = async () => {
     console.log("working");
     console.log("userData line 68 "+userLogin);
      await AsyncStorage.setItem("userLoginDetail", ""+userLogin)
      navigation.navigate("EventDetails1",{id:eventId});
    
  }

    // useEffect(() => {
    //   const unsubscribe = navigation.addListener('focus', () => {
    //     console.log('Refreshed!');
    //     getData();
    //   });
    //   return unsubscribe;
    // }, [navigation]);
  
    // const getData = () => {
    //   try {
    //       AsyncStorage.getItem("userLoginDetail").then(
    //         (value)=>{
    //           console.log("jadhsfkjdakfhds");
    //           setUserLogin(value);
            
    //          /*  if(value){
    //             setGuestStorage(value);
    //           }
    //           else {
    //             setGuestStorage('');
    //           } */
    //         },
    //         (error)=>{
    //           console.log(error); 
    //         }
    //       )
    //     } catch (error) {
    //       console.log(error);
    //     }
    //  }
      
     const onChange = (nativeEvent) => {
      // if(nativeEvent){
      //     const slide = Math.ceil(nativeEvent.contentOfSet.x / nativeEvent.layobutMeasurement.width);
      //     if(slide != imgActive){
      //         setimgActive(slide);
      //     }
      // }
  }


    return (
      <SafeAreaView style={styles.fullContainer}>
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
        <ScrollView>
        <View style={styles.LoginLabel}>
          <View style={styles.txt}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#000"}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.button} onPress={userLoginFun}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  export default UserLogin;

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#edffcf'

  },
  wrap: {
      width: WIDTH,
      height: HEIGHT * 0.15,
      marginBottom: 1
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
      backgroundColor:'#edffcf'

  },
  links: {
      width:"28%",
      margin:"2%",
      height:80,
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
      backgroundColor: '#4517b59c'
  },




    container: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 50,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#CCC",
      marginBottom: 20,
      marginTop: 50
    },
    fullContainer: {
      flex: 1,
      backgroundColor: '#fff'
    },
    LoginLabel: {
      flexDirection: 'row',
    },
    txt: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 50
    },
    loginText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: "#000"
    },
    loginButton: {
      marginHorizontal: 10
    },
    input: {
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
    },

    buttonStyle: {
      borderRadius: 40
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,

      backgroundColor: '#000',
      borderWidth: 2,
      borderRadius: 30,
      marginTop: 40,
      borderColor: '#000'
    },
    text: {
      fontSize: 16,

      fontWeight: 'bold',

      color: 'white',
    },


    guestLoginbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,

      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 30,
      marginTop: 40,
      borderColor: 'blue'
    },
    guestLogintext: {
      fontSize: 16,

      fontWeight: 'bold',

      color: 'blue',
    },
  })