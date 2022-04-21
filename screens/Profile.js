import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView,TouchableOpacity, Alert, ScrollView} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';                  

const Profile = ({route,navigation}) =>{

    const eventId = route.params.id

    const [guestStorage, setGuestStorage] = useState()


     useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          localStorageGet();
        });
        return unsubscribe;
      }, [navigation]);
    
    const localStorageGet = () => {
        try {
          AsyncStorage.getItem("userLoginDetail").then(
            (value)=>{
              console.log("dinehs");
              //console.log(JSON.parse(value));
              if(value){
                setGuestStorage(JSON.parse(value));
              }
              else {
                setGuestStorage('');
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




  const  logOut = () =>{
      console.log("logOut");
        AsyncStorage.removeItem("userLoginDetail");
        navigation.navigate("UserLogin",{id:eventId,logout:1});
    }


    
      useEffect(() => {
       
        localStorageGet();
        },[]);
    

        //const profileData = JSON.stringify(guestStorage);
        //console.log("line no 63 "+guestStorage.lname);


        const createTwoButtonAlert = () =>
    Alert.alert(
      "LogOut",
      "Are You Sure You Want to LogOut !!!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => logOut() }
      ]
    );




    return (


        <SafeAreaView style={styles.container}>


            <View style={styles.userProfileTitle}>
                         <Image
                            source={require('../assets/img/profileUploadImg.png')}
                            style={{ width: 100, height: 100, borderRadius:50 }}
                        />
            </View>
            {/* profileUploadImg.png */}

        <ScrollView>
            <View style={styles.profileContainer}>
                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>First Name</Text>
                    <Text style={styles.Opttext}>{guestStorage?.fname}</Text>
                </View>

                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>Last Name</Text>
                    <Text style={styles.Opttext}>{guestStorage?.lname}</Text>
                </View>

                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.Opttext}>{guestStorage?.email}</Text>
                </View>

               
                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>Designation</Text>
                    <Text style={styles.Opttext}>{guestStorage?.designation}</Text>
                </View>

                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>Organisation</Text>
                    <Text style={styles.Opttext}>{guestStorage?.organisation}</Text>
                </View>

                <View style={styles.profileSubContainer}>
                    <Text style={styles.text}>Country</Text>
                    <Text style={styles.Opttext}>{guestStorage?.country}</Text>
                </View>
            </View>

            <View style={styles.loginButton}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                createTwoButtonAlert()
            }}>
                <Text style={styles.textBtn}> Logout  </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        {/* <View style={styles.profile}>
            <Text style={styles.profileIcone}><Entypo name="chat" size={25} color="green" /></Text>
            <Text style={styles.profileText}>Message</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><MaterialCommunityIcons name="timetable" size={26} color="green" /></Text>
            <Text style={styles.profileText}>Appointments</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><AntDesign name="contacts" size={25} color="green" /></Text>
            <Text style={styles.profileText}>Contacts</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><Entypo name="book" size={25} color="green" /></Text>
            <Text style={styles.profileText}>Notes</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><MaterialIcons name="badge" size={24} color="green" /></Text>
            <Text style={styles.profileText}>My Badge</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><MaterialIcons name="compare-arrows" size={28} color="green" /></Text>
            <Text style={styles.profileText}>Switch Event</Text>
        </View>

        <View style={styles.profile}>
            <Text style={styles.profileIcone}><Feather name="settings" size={24} color="green" /></Text>
            <Text style={styles.profileText}>Settings</Text>
        </View> */}
        

        {/* <TouchableOpacity style={styles.profile} onPress={()=>{
            logOut()
        }}>
            <Text style={styles.profileIcone}><MaterialIcons name="logout" size={24} color="green" /></Text>
            <Text style={styles.profileText}>Logout</Text>
        </TouchableOpacity> */}
        
        


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

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    profileContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20
    },
    Opttext:{
            flex:1.5
    },
    
    profileSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'#000',
        padding:10
    
    },
    userProfileTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:30
    },
    userProfileText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
        borderBottomWidth:5,
        borderColor:'#000'
    },
    profile:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:15,
    },
    profileIcone:{
        flex:1,
        textAlign:'center'
    },
    text:{
        flex:1,
        fontSize:18,
        fontWeight:"bold"
    },
    profileText:{
        flex:8,
        fontWeight:'bold'
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

    loginButton: {
        marginHorizontal: 10
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

      textBtn: {
        fontSize: 17,
        color: "#fff"
    },
})