import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, SafeAreaView,ScrollView,FlatList,Image,Dimensions,Pressable,TouchableOpacity} from 'react-native';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { sponserList } from '../config.js/config';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { sponsorByEventId, sponsorWithCategory, upcomingsImage } from '../config.js/api';



const Sponsors = ({route,navigation}) =>{


   // console.log("line 16 "+JSON.stringify(route.params));

    const eventId = route.params.id;


    const [list, setList] = useState([""]);
    const fetchData=()=>{

        console.log(sponsorWithCategory+eventId);
        
    axios.get(sponsorWithCategory+eventId).then(
    (respone) => {
     console.log(respone.data);

    setList(respone.data);
    },

    (error) => {

    console.log(error);

    }

    )

    }

    useEffect(() => {
        fetchData();
    },[]);


    console.log("line no 52 "+JSON.stringify(list))

    return (
        <View style={styles.container}>
            {/* <FlatList
                    data={list}
                    keyExtractor={(itemKey) => { itemKey.id }}
                    renderItem={({ itemc }) => {
               
                        return (

                            <>
            <View><Text>itemc.name</Text></View>

             <FlatList
                    data={itemc.listSponsorEntity}
                    keyExtractor={(itemKey1) => { itemKey1.id }}
                    renderItem={({ item }) => {
                        return (
                
               
            <View style={styles.containerCard}>
                <View style={styles.imageContainer}>
                <Image
                              source={{ uri: upcomingsImage+item.imageUrl }}
                            style={{ width: 60, height: 60, borderRadius:50 }}
                        />
                </View>
               
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.bootno}>{item.boothNo}</Text>
                </View>
            </View>
               )}}/>
                </>

               )}}/>


 */}
  
    <ScrollView style={{ marginBottom:70 }}>
        <FlatList
            data={list}
            renderItem={({ item }) => (
              <View>
                <View style={styles.catTitle}>
                    <Text style={styles.catTitleText}>{item.name}</Text>
                 </View>
                <FlatList
                  data={item.listSponsorEntity}
                  renderItem={({ item }) => 
                  <View style={styles.containerCard}>
                  <View style={styles.imageContainer}>
                  <Image
                                source={{ uri: upcomingsImage+item.imageUrl }}
                              style={{ width: 60, height: 60, borderRadius:50 }}
                          />
                  </View>
                 
                  <View style={styles.subContainer}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.bootno}>{item.boothNo}</Text>
                  </View>
              </View>
                }
                  keyExtractor={item => item._id}
                  
                />
              </View>
            )}
            keyExtractor={item => item._id}
          />
    </ScrollView>
    




<View style={styles.dummyDiv}></View>
        <View style={styles.tabContainer}>
           <TouchableOpacity 
           style={styles.div1}
            onPress={()=>{navigation.navigate('EventDetails1',{
                id:eventId
            })}}
            
            >
                <Text><MaterialIcons name="event" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Event Guide</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div2}
           onPress={()=>{navigation.navigate('Schedule',{
            id:eventId
        })}}
           >
                <Text><MaterialIcons name="schedule" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Schedule</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div3}
           onPress={()=>{navigation.navigate('Profile1',{
            id:eventId
        })}}
           >   
                <Text><AntDesign name="profile" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>Profile</Text>
           </TouchableOpacity>
           <TouchableOpacity  
           style={styles.div4}
           onPress={()=>{navigation.navigate('More1',{
            id:eventId
        })}}
           >
                <Text><Feather name="more-horizontal" size={24} color="#fff" /></Text>
                <Text style={styles.tabText}>More</Text>
           </TouchableOpacity>
           
       </View>

        </View>
      
    )
}

export default Sponsors;

const styles = StyleSheet.create({

    container:{
        flex:1,
       
    },
    catTitleText:{
        fontSize:20,
        padding:10,
        color:'#fff'
    },
    catTitle:{
        backgroundColor:"#7a7a72",
        paddingHorizontal:20,
         
          
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        
    },
    bootno:{
        fontSize:17, 
    },
    containerCard:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
    
        
    
        borderBottomWidth:1,

        borderColor:'#ccc'
    },
    imageContainer:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    subContainer:{
       flex:5,
       alignItems:'flex-start',
       justifyContent:'center'
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