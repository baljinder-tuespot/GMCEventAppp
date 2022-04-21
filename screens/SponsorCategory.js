//import liraries
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text,FlatList ,StyleSheet, SafeAreaView,ScrollView,Image,Dimensions,Pressable,TouchableOpacity,ImageBackground} from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { speakerList } from '../config.js/config';
import { baseUrl, SponserCategory } from '../config.js/api';

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


const SponsorCategory = ({route,navigation}) => {

    const eventId = route.params.id;

    const urlId = route.params.urlId

  console.log("cat urlId "+urlId);

const [list, setList] = useState([]);
const fetchData=()=>{
axios.get().then(
(respone) => {
//console.warn(respone.data);
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
                onScroll={({nativeEvent}) => {onChange(nativeEvent)}}
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

        <FlatList
                data={list}
                keyExtractor={(itemKey)=>{itemKey.id}}
                renderItem={({item})=>{

                    return(
                      <View style={styles.categoryContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors',{catId:item.id})}} style={styles.categoryList}><Text style={styles.categoryText}>{item.categorySponsor}</Text></TouchableOpacity>
                        {/* <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Networking Social Group Sponsers</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Startup Zone and Gold Sponsers</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Gold Sponsers</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Silver Sponsers</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Bronze Sponsers</Text></TouchableOpacity> */}
                      </View>   
                    )


                }} />



        {/* <ScrollView>
         <View style={styles.categoryContainer}>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>All Sponsers</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Networking Social Group Sponsers</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Startup Zone and Gold Sponsers</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Gold Sponsers</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Silver Sponsers</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate('Sponsors')}} style={styles.categoryList}><Text style={styles.categoryText}>Bronze Sponsers</Text></TouchableOpacity>
        </View>   
        </ScrollView> */}



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
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'column'
    },

    categoryList:{
        backgroundColor:'#fff',
        padding:10,
        borderWidth:2,
        borderColor:'#CCC'
    },
    categoryText:{
        fontSize:18,
        padding:10
    },
    container:{
        flex:1,
        
    },
    wrap:{
        width : WIDTH,
        height : HEIGHT * 0.15,
        marginBottom:1
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
export default SponsorCategory;
