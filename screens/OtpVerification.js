//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const OtpVerification = ({route,navigation}) => {


    

    const eventId = route?.params?.id;

  console.log("event id on User Login page ");


  const [otp, setOtp] = useState();
  const [guestUser, setGuestUser] = useState();

  const  userLoginFun = async () => {

          setGuestUser(route.params.guestUser)
    
        
        if(route.params.guestUser.otp == otp){
          AsyncStorage.setItem("guestLogin", route.params.guestUser.to);
            navigation.navigate('EventDetails1', {
                id: eventId
              })
        }else{
            alert("Wrong otp !!");
            navigation.navigate('UserLogin', {
                id: eventId
              })
        }
    }

    return (
        <SafeAreaView style={styles.fullContainer}>

        <View style={styles.LoginLabel}>
            <View style={styles.txt}>
            <Text style={styles.loginText}>GMC Event Otp Verification</Text>
            </View>
        </View>

        <View>
          <TextInput
                style={styles.input}
                placeholder="OTP"
                placeholderTextColor={"blue"}
                onChangeText={(text) => setOtp(text)}
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

        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.guestLoginbutton} onPress={userLoginFun}>
              <Text style={styles.guestLogintext}>Otp Verification</Text>
          </TouchableOpacity>
        </View>

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
    );
};

// define your styles
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
});

//make this component available to the app
export default OtpVerification;
