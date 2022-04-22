import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, StyleSheet,ScrollView, FlatList,TouchableOpacity,BackHandler,Picker,Image} from 'react-native';
import { schedule, sponserList } from '../config.js/config';
import SpeakerSponsorList from '../Components/SpeakerSponsorList';
import { allSessionsByEventId, getSeesionByEventIdAndSessionId, getSessionByEventId, sessionDetailLocalId, sessionIdURl, upcomingsImage, } from '../config.js/api';
import BottomTabComponent from '../Components/BottomTabComponent';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { speakerList } from '../config.js/config';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Schedule = ({route,navigation}) =>{

   const eventId = route.params.id;
    const data = schedule;


   


    const [list, setList] = useState([]);
    const [date, setDate] = useState([]);

    const fetchData=()=>{
        console.log(sessionDetailLocalId+eventId);
    axios.get(sessionDetailLocalId+eventId).then(
    (respone) => {

   
   console.warn(respone.data);
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

    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          
        });
        return unsubscribe;
      }, [navigation]);

    
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    },[])
    const handleBackButtonClick = () => {
        console.log("backButton working Schedule Screen")
        navigation.navigate('EventDetails1',{
            id:eventId
         })

        //navigation.goBack();
        return true;
    }


    

const navigateMethod = async (sessionId, webLink) => {

    console.log("webLink Line 85 "+webLink);

    if(webLink){

        console.log(webLink);
        console.log("method ")
        AsyncStorage.removeItem("webLink");
        
        await AsyncStorage.setItem("webLink", ''+webLink);
        navigation.navigate('SessionWebLink', {
            id:eventId,
            sessionId:sessionId,
            web : webLink
            })

    }
}

        console.log("listForDate "+JSON.stringify(list));


    // const renderProductList = () => {
    //     return productDetails.map((date) => {
    //     return <Picker.Item label={date.date} value={date.date} />
    //     })
    // }



        function getDateTime(timestem){

            console.log("line101 "+timestem);

            var timestemp = new Date(timestem);
            //var timestemp2 = new Date( list?.sessionsEntity?.startTime);
        
            function  getReturnDate(month){
        
                month = month+1; 
                console.log(month)
        
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
        
        
          //  var startTime = timestemp2.getHours()+":"+timestemp2.getMinutes()+" am";
        
            var endTime = timestemp.getHours()+":"+timestemp.getMinutes()+" pm";
        
            //var startDate = timestemp2.getDate()+" "+getReturnDate(timestemp.getMonth());
            var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();

            return endDate;
        }



        function getstartTime(timestem){

            console.log("line101 "+timestem);

            var timestemp = new Date(timestem);
            //var timestemp2 = new Date( list?.sessionsEntity?.startTime);
        
            function  getReturnDate(month){
        
                month = month+1; 
                console.log(month)
        
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
        
        
           var startTime = timestemp.getHours()+":"+timestemp.getMinutes()+" am";
        
            var endTime = timestemp.getHours()+":"+timestemp.getMinutes()+" pm";
        
            //var startDate = timestemp2.getDate()+" "+getReturnDate(timestemp.getMonth());
            var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();

            return startTime;
        }


        function getendTime(timestem){

            console.log("line101 "+timestem);

            var timestemp = new Date(timestem);
            //var timestemp2 = new Date( list?.sessionsEntity?.startTime);
        
            function  getReturnDate(month){
        
                console.log(month)
        
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
        
        
           var startTime = timestemp.getHours()+":"+timestemp.getMinutes()+" am";
        
            var endTime = timestemp.getHours()+":"+timestemp.getMinutes()+" pm";
        
            //var startDate = timestemp2.getDate()+" "+getReturnDate(timestemp.getMonth());
           // var endDate = timestemp.getDate()+" "+getReturnDate(timestemp.getMonth())+" "+timestemp.getFullYear();

            return endTime;
        }

    
        


  
    return (
        <View style={styles.container}>
            <View>
                {/* <Picker
                    selectedValue={selectedValue.date}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                   itemStyle={{backgroundColor:'red'}}
                >


                    {/* {renderProductList()}

                    <Picker.Item label="Mon 20, 2022" value="Mon 20, 2022" />
                    <Picker.Item label="Mon 20, 2022" value="Mon 20, 2022" />
                    <Picker.Item label="Mon 20, 2022" value="Mon 20, 2022" />
                
                </Picker> */}
            </View>


            <View style={styles.topBottomMargin}>

            
            <ScrollView style={{ marginBottom:70 }}>
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                    (
                    <View>
                        <View style={styles.catTitle}>
                            <Text style={styles.catTitleText}>{getDateTime(item.dates)}</Text>
                        </View>
                        <FlatList
                        data={item.model}
                        renderItem={({ item }) => 
                            

                        <TouchableOpacity style={styles.listContainer} onPress={()=>navigateMethod(item.id, item.description)}>
                                    {/* <View style={styles.flexDiv1}>
                                            <Image
                                                source={{uri : upcomingsImage+item.sessionsPhotoEntities}}
                                                style={{width:70,height:70, borderRadius:50,marginBottom:4}}
                                            />
                                        {/* <Text style={styles.Time}>{startDate}</Text>
                                        <Text style={styles.Time}>{endDate}</Text> 
                                    </View> */}
                                    <View style={styles.flexDiv2}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        {/* <View style={styles.dotAndCat}>
                                            <Text  style={styles.nameDot}>.</Text> 
                                            <Text style={styles.subtitle}>{item.sessionCategoryEntity}</Text>
                                        </View> */}
                                        
                                        <Text style={styles.subtitle}>{item.location}</Text>
                                        <Text style={styles.Time}>{item.sessionStartTime} - {item.serssionEndTime}</Text>
                                    </View>
                                    {/* <View style={styles.flexDiv2}>
                                    
                                        <Text style={styles.Time}></Text>
                                    </View> */}
                                    {/* <View style={styles.flexDiv3}>
                                        <Text><AntDesign name="pluscircle" size={24} color="#000" /></Text>
                                    </View> */}
                                </TouchableOpacity>
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

        </View>
        </View>
    )
}

export default Schedule;

const styles = StyleSheet.create({

    catTitleText:{
        fontSize:16,
        padding:10,
        color:'#fff'
    },
    catTitle:{
        backgroundColor:"#7a7a72",
        paddingHorizontal:20,
        marginVertical:5
         
          
    },
    topBottomMargin:{
        flex:1,
        marginTop:3
       
        
    },
    bgColor:{
        backgroundColor:'red'
    },
    bgColor41:{
        backgroundColor:'#282829'
    },
    dotAndCat:{
        flexDirection:'row',
       
    },
    container:{
         flex: 1,
        
        },
        priker:{
            backgroundColor:'red'
        },
        bottomSpace:{
            marginBottom:40 
        },
        nameDot:{
            fontWeight:'bold',
            fontSize:40,
            marginTop:-30,
            marginRight:2,
            borderRadius:50,
            color:'#000',
        },
    listContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ccc',
        paddingHorizontal:10,
        paddingVertical:5,
        marginHorizontal:10,
        marginVertical:1,
        borderWidth:0,
        borderColor:'#000',
        borderRadius:5,
        // backgroundColor:"#bcd636",
        marginBottom:5
    },
    flexDiv1:{
        flex:1,
        alignItems:'center',
        
    },
    flexDiv2:{
        marginLeft:30,
        flex:10,
    },
    flexDiv3:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
       
        fontWeight:'bold',
        fontSize:18
        
    },

    Time:{
        color      : "#000",
        fontWeight : 'bold',
        fontSize   :  15
    },
    subtitle:{
        fontSize:15,
       
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