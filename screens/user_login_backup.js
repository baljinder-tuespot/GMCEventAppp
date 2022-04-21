import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, SafeAreaView, Button, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { baseUrl, loginUrl } from '../config.js/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocation } from 'react-router';
function UserLogin({ route, navigation}) {
  //const location = useLocation()

  const eventId = route.params.id;
 //const eventId = 4;

  //console.log("event id on User Login page " + eventId);
 
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [guestStorage, setGuestStorage] = useState()

  const userLoginFun = async () => {
    console.log("username " + username);
    console.log("password " + password);

      
  
    axios.get(baseUrl + "attendees/login/?email=" + username + "&password=" + password + "").then(
      (respone) => {
        console.warn(respone.data);
        if (respone.data.authenticate == true) {
          alert("Login Done");
          navigation.navigate("EventDetails1", { id: eventId })
          
        } else {
          
          alert("Wrong Credientials ")
        }

      },
      (error) => {
        console.log(error);
      }
    )
    
  }




  var localvalue="";

  // const localStorageGet = () => {
  //   try {
  //     AsyncStorage.getItem("guestLogin").then(
  //       (value)=>{
  //         console.log("dinehs");
  //         console.log(value);
  //         if(value){
  //           setGuestStorage(value);
  //         }
  //         else {
  //           setGuestStorage('');
  //         }
  //       },
  //       (error)=>{
  //         console.log(error); 
  //       }
  //     )
  //   } catch (error) {
  //     console.log(error);
  //   }
  
 
  }
  //locsalStorageGet();
  useEffect(() => {
     localStorageGet()
  },[])



// useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       console.log('Refreshed!');
//     });
//     return unsubscribe;
//   }, [navigation]);




  console.log("guestUserDetails "+guestStorage);
  // function loginRrsult(){
  //   if(guestStorage){
  //     return (
  //       <TouchableOpacity style={styles.guestLoginbutton} onPress={() => {
  //         navigation.navigate('EventDetails1', {
  //           id: eventId
  //         })
  //       }}>
  //         <Text style={styles.guestLogintext}>{guestStorage}</Text>
  //       </TouchableOpacity>
  //     )
  //   }else{
  //     return(
  //       <TouchableOpacity style={styles.guestLoginbutton} onPress={() => {
  //         navigation.navigate('GuestLogin', {
  //           id: eventId
  //         })
  //       }}>
  //         <Text style={styles.guestLogintext}>Guest Login</Text>
  //       </TouchableOpacity>
  //     )
  //   }
  // }


    return (
      <SafeAreaView style={styles.fullContainer}>
        <View style={styles.LoginLabel}>
          <View style={styles.txt}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"blue"}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"blue"}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* <View style={styles.loginButton}>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('EventDetails1', {
                id: eventId
              })}}>
                <Text style={styles.text}>Register Deligate</Text>
            </TouchableOpacity> */}


        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.button} onPress={userLoginFun}>
            <Text style={styles.text}>Register Delegate</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.loginButton}>
          <TouchableOpacity style={styles.guestLoginbutton} onPress={() => {
              navigation.navigate('GuestLogin', {
                id: eventId
              })
            }}>
              <Text style={styles.guestLogintext}>Guest Login</Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={styles.loginButton}>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View> */}

        {/* <View style={styles.container}>
         
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.loginButton}>
          <Button title="Login"
            color="#4517b59c"
            // onPress={userLoginFun}
            onPress={() => {
              navigation.navigate('EventDetails1', {
                id: eventId
              })
            }}
          />
        </View>
      </View> */}
      </SafeAreaView>
    )
  }

  export default UserLogin;

  const styles = StyleSheet.create({
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
      color: "blue"
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

      backgroundColor: 'blue',
      borderWidth: 2,
      borderRadius: 30,
      marginTop: 40,
      borderColor: 'blue'
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