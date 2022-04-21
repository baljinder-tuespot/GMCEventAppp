import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, SafeAreaView, Button,ActivityIndicator, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { baseUrl, guestLoginUrl, loginUrl } from '../config.js/api';



function GuestLogin({ route, navigation }) {


  const eventId = route.params.id;

  console.log("event id on User Login page " + eventId);


  //get Form Data
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(false);

  const  userLoginFun = async () => {
  
    

    setLoading(true)

    axios.get(guestLoginUrl+username).then(
      (respone) => {
       // console.warn(respone.data);

            if(respone.data.otp != null){
              setUsername()
              setLoading(false)
              navigation.navigate("OtpVerification", { id: eventId, guestUser:respone.data })
            }

        // if (respone.data.authenticate == true) {
        //   alert("Login Done");
        //   navigation.navigate("EventDetails1", { id: eventId })
        // } else {
        //   alert("Wrong Credientials ")
        // }


      },
      (error)=>{
        console.log(error);
      }
    )
    }

    
   //const   loginFunction= async ()=>{


  //   const value = await AsyncStorage.getItem('authenticate');

  //        console.log(value);



  //       // AsyncStorage.getItem('authenticate').then(Value => {
  //       //         if(Value != true){
  //       //           alert("Login Done");
  //       //           navigation.navigate("EventDetails1",{id:eventId})
  //       //         }else{
  //       //           alert("Wrong Credientials");
  //       //         } 
  //       //      })
  // }

 // userLoginFun();



  return (
    <SafeAreaView style={styles.fullContainer}>
       
          <View style={styles.LoginLabel}>
              <View style={styles.txt}>
              <Text style={styles.loginText}>Guest Login</Text>
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

          {/* <View>
            <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={"blue"}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />
          </View> */}

         {/* <View style={styles.loginButton}>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('EventDetails1', {
                id: eventId
              })}}>
                <Text style={styles.text}>Register Deligate</Text>
            </TouchableOpacity> */}


            {/* <View style={styles.loginButton}>
            <TouchableOpacity style={styles.button} onPress={userLoginFun}>
                <Text style={styles.text}>Register Deligate</Text>
            </TouchableOpacity>
          </View> */}
          {loading ? (<ActivityIndicator visible={loading}  color="#2c3e50" size={50}/>  ):(
          <View style={styles.loginButton}>
            <TouchableOpacity style={styles.guestLoginbutton} onPress={userLoginFun}>
                <Text style={styles.guestLogintext}>Guest Login</Text>
            </TouchableOpacity>
          </View>)}

          

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

export default GuestLogin;

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
  fullContainer:{
    flex:1,
    backgroundColor:'#fff'
  },
  LoginLabel:{
    flexDirection:'row',
  },
  txt:{
    flex:1,
    alignItems:'center',
    marginVertical:50
  },
  loginText:{
    fontSize:25,
    fontWeight:'bold',
    color:"blue"
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

  buttonStyle:{
    borderRadius:40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,

    backgroundColor: 'blue',
    borderWidth:2,
    borderRadius:30,
    marginTop:40,
    borderColor:'blue'
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
    borderWidth:2,
    borderRadius:30,
    marginTop:40,
    borderColor:'blue'
  },
  guestLogintext: {
    fontSize: 16,
    
    fontWeight: 'bold',
    
    color: 'blue',
  },
})