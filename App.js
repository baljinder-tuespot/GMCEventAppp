import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Speakers from './screens/Speakers';
import Sponsors from './screens/Sponsors';
import Exhibitors from './screens/Exhibitors';
import { TctivityFeedTopTab, EventGuidBottomTab, GcmEventTabs, stackNativagationActivityFeed, ActivityFeedTopTab, ScheduleTopTab, LoginStackNavigation, EventGuidStack, AboutStack, SponsorStack, ExhibitorsStack, NetworkingStack, ShuttleStack, ActivityFeedStack, AllScheduleStack, ScheduleDetailStack, SubSessionDetailStack, SpeakerHomeStack, SpeakerByNameStack, SpeakerByCategoryStack, SpeakerDetailByNamelStack, SpeakerDetaillStack, SessionWebLinkStack, AccomodationStack, MoreStack, ProfileStack } from './Components/Routes';
import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';
import Profile from './screens/Profile';
import More from './screens/More';
import Login from './screens/Login';
import UserLogin from './screens/UserLogin';
import GuestLogin from './screens/GuestLogin';
import SplashScreen from './screens/SplashScreen';
import SponsorCategory from './screens/SponsorCategory';
import ScheduleComponent from './Components/ScheduleComponent';
import SpeakerDetail from './screens/SpeakerDetail';
import About from './screens/About';
import SpeakerCategory from './screens/SpeakerCategory';
import SponsorDetail from './screens/SponsorDetail';
import ScheduleDetail from './screens/ScheduleDetail';
import SpeakersUnderSchedule from './screens/SpeakersUnderSchedule';
import Attendees from './screens/Attendees';
import RegisterScreen from './screens/RegisterScreen';
import UpcomingWebLinks from './screens/UpcomingWebLinks';
import SubSessionDetail from './screens/SubSessionDetail';
import SpeakerHome from './screens/SpeakerHome';
import SpeakerDetailByName from './screens/SpeakerDetailByName';
import Networking from './screens/Networking';
import Shuttle from './screens/Shuttle';
import OtpVerification from './screens/OtpVerification';
import EventWebView from './screens/EventWebView';
import AfterEventSplash from './screens/AfterEventSplash';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


/*

  e36a4c
0d84be
7a7a72

*/


export default function App() {
  return (
   
    <NavigationContainer>

      <Drawer.Navigator>

     
     
          
      {/* <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
          }}
        /> */}

      <Drawer.Screen
          name="Home"
          component={GcmEventTabs}
          options={{
            title: "GW Events",
            headerTintColor: '#fff',
            // headerRight: () => 
            // (
            //   <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            // ),
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />

    <Drawer.Screen
          options={{
            title: "Otp Verification",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
            drawerItemStyle: {
              display: 'none'
            },
          }}
          name='OtpVerification'
          component={OtpVerification} 
          />

      <Drawer.Screen
          name="SubSessionDetail"
          component={SubSessionDetailStack}
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Sub Session Detail",
            headerTintColor: '#fff',
            headerRight: () => 
            (
              <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#000',
          },
        }}
      />

      <Drawer.Screen
          name="SpeakerHome"
          component={SpeakerHomeStack}
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Speaker Home",
            headerTintColor: '#fff',
            headerRight: () => 
            (
              <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#000',
          },
        }}
      />


        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Sponsor Detail",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='SponsorDetail'
          component={SponsorDetail} 
        />


      <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Speaker Detail",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='SpeakerDetail'
          component={SpeakerDetaillStack} />


      <Drawer.Screen
          name="About"
          component={AboutStack}

          options={{
            headerShown:false,
            title: "About Us",
            drawerItemStyle: {
              display: 'none'
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />

       
      <Drawer.Screen
        name="SpeakerCategory"
          component={SpeakerByCategoryStack}
          options={{
            headerShown:false,
            title: "Speaker Category",
            drawerItemStyle: {
              display: 'none'
            },
            headerTintColor: '#fff',
            headerRight: () => 
            (
              <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />

<Drawer.Screen
        name="SpeakerDetailByName"
          component={SpeakerDetailByNamelStack}

          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Speaker Details",
            drawerItemStyle: {
              display: 'none'
            },
            headerTintColor: '#fff',
            headerRight: () => 
            (
              <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />
       

       {/* SpeakerDetailByName */}


        <Drawer.Screen
          name="SponsorCategory"
          component={SponsorCategory}
          options={{
            title: "Sponsor Category",
            headerTintColor: '#fff',
            drawerItemStyle: {
              display: 'none'
            },
            headerRight: () => 
            (
              <FontAwesome name="search" style={{ marginRight: 20 }} size={22} color="#fff" />
            ),
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Event Guide",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='EventDetails'
          component={EventGuidStack} />


        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Activity Feed",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}

          name='ActivityFeed'
          component={ActivityFeedStack}
        />


    <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Activity Feed",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}

          name='SessionWebLink'
          component={SessionWebLinkStack}
        />

        
    <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Activity Feed",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}

          name='AccomodationStack'
          component={AccomodationStack}
        />

        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Speakers By Name",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='Speakers'
          component={SpeakerByNameStack}
        />

      <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Speakers",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='SpeakersUnderSchedule'
          component={SpeakersUnderSchedule}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Attendees",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='Attendees'
          component={Attendees}
        />


      
{/* Attendees */}



        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Sponsors",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='Sponsors'
          component={SponsorStack} />


        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Networking",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='Networking'
          component={NetworkingStack} />

        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Networking",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
          }}
          name='Shuttle'
          component={ShuttleStack} />


        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Exhibitors",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='Exhibitors'
          component={ExhibitorsStack} 
          
          
          />

        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "User Login",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff',
            drawerItemStyle: {
              display: 'none'
            },
          }}
          name='UserLogin'
          component={LoginStackNavigation} 
          
          
          />

        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Guest Login",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='GuestLogin'
          component={GuestLogin} 
          
          
          />


        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Login",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='Login'
          component={Login} 
          />

        





<Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Event Guide",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='EventDetails1'
          component={EventGuidStack}
          
          />


        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "All Schedule",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='Schedule'
          component={AllScheduleStack} />

        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Upcomings",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='UpcomingWebLinks'
          component={UpcomingWebLinks} />

<Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Event Feed",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='EventWebView'
          component={EventWebView} />

<Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Event Feed",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='AfterEventSplash'
          component={AfterEventSplash} />

{/* AfterEventSplash */}


{/* UpcomingWebLinks */}
        <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "User Registeration",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='RegisterScreen'
          component={RegisterScreen}
          />

{/* RegisterScreen */}
        <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Schedule Deatil",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='ScheduleDetail'
          component={ScheduleDetailStack} />

    <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "Profile",
            headerStyle:{
              backgroundColor:'#000',
            },
            headerTintColor:'#fff'
          }}
          name='Profile1'
          component={ProfileStack} />


    

    <Drawer.Screen
          options={{
            headerShown:false,
            drawerItemStyle: {
              display: 'none'
            },
            title: "More",
            headerStyle:{
              backgroundColor:'#000',
              
            },
            headerTintColor:'#fff',
            
          }}
          name='More1'
          component={MoreStack} />


      {/* <Drawer.Screen
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            title: "Activity Feed",
          }}
          name='activityFeedTopTab'
          component={activityFeedTopTab} /> */}

      </Drawer.Navigator>

    </NavigationContainer>
  );
}

