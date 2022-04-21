import React,{useState} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, SafeAreaView,ScrollView,Button,Image,Dimensions,Pressable,TouchableOpacity} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
 
// create a component
const Attendees = ({route,navigation}) => {

    const eventId = route.params.id;

    return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonStyle}>
                   <Text style={{color:'#fff',fontSize:16}}>Invite</Text>
               </TouchableOpacity>
            </View>
        </View>
        

        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonTick}>
                   <Text style={{color:'#fff',fontSize:16}}> <MaterialIcons name="done" size={24} color="#fff" /></Text>
               </TouchableOpacity>
            </View>
        </View>


        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonStyle}>
                   <Text style={{color:'#fff',fontSize:16}}>Invite</Text>
               </TouchableOpacity>
            </View>
        </View>
       


        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonTick}>
                   <Text style={{color:'#fff',fontSize:16}}> <MaterialIcons name="done" size={24} color="#fff" /></Text>
               </TouchableOpacity>
            </View>
        </View>




        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonStyle}>
                   <Text style={{color:'#fff',fontSize:16}}>Invite</Text>
               </TouchableOpacity>
            </View>
        </View>
       

        <View style={styles.text}>
            <View style={styles.speakerImg}>
            <Image
                source={require('../assets/img/ActivityFeed.webp')}
                style={{ width: 60, height: 60, borderRadius:50 }}
            />
            </View>
            <View style={styles.Data}>
                <Text style={styles.name}>Shikha Srivastava</Text>
                <Text style={styles.address}>Head - Urban Poverty Alleviation, Tata Trusts</Text>
                <Text style={styles.name}>Moderator</Text>
            </View>
            <View style={styles.button}>
               {/* <Button
                title="Invite"
                style={styles.buttonStyle}
               /> */}
               <TouchableOpacity style={styles.buttonTick}>
                   <Text style={{color:'#fff',fontSize:16}}> <MaterialIcons name="done" size={24} color="#fff" /></Text>
               </TouchableOpacity>
            </View>
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
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    text:{
        flexDirection:'row',
        backgroundColor:'#ccc',
        padding:10,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:15
    },
    speakerImg:{
       flex:2 ,
       alignItems:'center',
       justifyContent:'center',
       padding:5
    },
    name:{
        fontSize:18,
        fontWeight:'bold'
    },
    Data:{
        flex:5
    },
    address:{
        fontSize:16
    },
    button:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    },

    buttonTick:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'green',
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
export default Attendees;
