import React from 'react';
import {Text, View, Pressable,StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

function BottomTabComponent({navigation}){
    return(
       <View style={styles.container}>
           <TouchableOpacity 
           style={styles.div1}
            onPress={()=>{navigation.navigate('EventDetails1')}}
            
            >
                <Text><MaterialIcons name="event" size={24} color="black" /></Text>
                <Text>Event Guide</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div2}
           onPress={()=>{navigation.navigate('Schedule1')}}
           >
                <Text><MaterialIcons name="schedule" size={24} color="black" /></Text>
                <Text>Schedule</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={styles.div3}
           onPress={()=>{navigation.navigate('Profile1')}}
           >   
                <Text><AntDesign name="profile" size={24} color="black" /></Text>
                <Text>Profile</Text>
           </TouchableOpacity>
           <TouchableOpacity  
           style={styles.div4}
           onPress={()=>{navigation.navigate('More1')}}
           >
                <Text><Feather name="more-horizontal" size={24} color="black" /></Text>
                <Text>More</Text>
           </TouchableOpacity>
           
       </View>
    );
}

export default BottomTabComponent;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flexDirection:'row',
        padding:5,
        position:'absolute',
        bottom:0
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
    }
});