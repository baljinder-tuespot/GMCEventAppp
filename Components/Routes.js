import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import ListComponent from '../screens/ListComponent';
import CurrentAndUpcoming from '../screens/CurrentAndUpcoming';
import EventDetails from '../screens/EventDetails';
import Schedule from '../screens/Schedule';
import Profile from '../screens/Profile';
import More from '../screens/More';
import EventFeed from '../screens/EventFeed';
import SocialWall from '../screens/SocialWall';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import ActivityFeed from '../screens/ActivityFeed';
import { TabBarIndicator } from 'react-native-tab-view';
import MySchedule from '../screens/MySchedule';
import UserLogin from '../screens/UserLogin';
import About from '../screens/About';
import Sponsors from '../screens/Sponsors';
import Exhibitors from '../screens/Exhibitors';
import Networking from '../screens/Networking';
import Shuttle from '../screens/Shuttle';
import ScheduleDetail from '../screens/ScheduleDetail';
import SubSessionDetail from '../screens/SubSessionDetail';
import SpeakerHome from '../screens/SpeakerHome';
import Speakers from '../screens/Speakers';
import SpeakerCategory from '../screens/SpeakerCategory';
import SpeakerDetail from '../screens/SpeakerDetail';
import { useEffect } from 'react/cjs/react.production.min';
import SpeakerDetailByName from '../screens/SpeakerDetailByName';
import SessionWebLink from '../screens/SessionWebLink';
import Accomodation from '../screens/Accomodation';
import SpeakerWebView from '../screens/SpeakerWebView';
import ExhibitorWebView from '../screens/ExhibitorWebView';
import SponsorWebView from '../screens/SponsorWebView';


const Tab = createMaterialTopTabNavigator();
const bottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


export function LoginStackNavigation({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='UserLogins'
        initialParams={{ id: eventId }}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={UserLogin} />
    </Stack.Navigator>
  )
}

export function EventGuidStack({ route, navigation }) {
  const eventId = route.params.id;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='EventDetail'
        initialParams={{ id: eventId }}
        options={{
          title: 'Event Guide',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (



            <TouchableOpacity onPress={() => { navigation.navigate('Home', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={EventDetails} />
    </Stack.Navigator>
  )
}


export function AboutStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SessionDetailWeb'
        initialParams={{ id: eventId }}
        options={{
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={About} />
    </Stack.Navigator>
  )
}


export function MoreStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MoreStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'More',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={More} />
    </Stack.Navigator>
  )
}



export function ProfileStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MoreStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'More',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Profile} />
    </Stack.Navigator>
  )
}





export function AccomodationStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccomodationStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Accomodation',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Accomodation} />
    </Stack.Navigator>
  )
}


export function SessionWebLinkStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SessionWebLinkStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Session Detail',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('Schedule', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SessionWebLink} />
    </Stack.Navigator>
  )
}

export function SponsorStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SponsorsList'
        initialParams={{ id: eventId }}
        options={{
          title: 'Sponsors List',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SponsorWebView} />
    </Stack.Navigator>
  )
}


export function ExhibitorsStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ExhibitorsList'
        initialParams={{ id: eventId }}
        options={{
          title: 'Exhibitors',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={ExhibitorWebView} />
    </Stack.Navigator>
  )
}


export function NetworkingStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='NetworkingStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Networking',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Networking} />
    </Stack.Navigator>
  )
}


export function ShuttleStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='NetworkingStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Shuttle Timings',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Shuttle} />
    </Stack.Navigator>
  )
}


export function ActivityFeedStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ActivityFeedTopTabStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Activity Feed',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={EventFeedWebView} />
    </Stack.Navigator>
  )
}


export function SpeakerHomeStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SpeakerHomeStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Speakers',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SpeakerWebView} />
    </Stack.Navigator>
  )
}


export function SpeakerByNameStack({ route, navigation }) {
  const eventId = route.params.id;
  const urlId = route.params.urlId;
  console.log("SpeakerByNameStack " + JSON.stringify(route));

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SpeakerByNameStack'
        initialParams={{ id: eventId, urlId: urlId }}
        options={{
          title: 'Speakers List',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('SpeakerHome', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Speakers} />
    </Stack.Navigator>
  )
}





export function SpeakerByCategoryStack({ route, navigation }) {
  const eventId = route.params.id;
  const urlId = route.params.urlId
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SpeakerByCategoryStack'
        initialParams={{ id: eventId, urlId: urlId }}
        options={{
          title: 'Speakers Category',
          headerStyle: {
            backgroundColor: '#e36a4c',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('SpeakerHome', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SpeakerCategory} />
    </Stack.Navigator>
  )
}


export function SpeakerDetailStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SpeakerDetailStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Speakers Details',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('SpeakerHome', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SpeakerDetail} />
    </Stack.Navigator>
  )
}


export function AllScheduleStack({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ActivityFeedTopTabStack'
        initialParams={{ id: eventId }}
        options={{
          title: 'Schedule',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={Schedule} />
    </Stack.Navigator>
  )
}

export function SubSessionDetailStack({ route, navigation }) {
  const eventId = route.params?.id;
  const sessionId = route.params?.sessionId
  const subSessionName = route.params?.subSessionName;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SubSessionDetailStack'
        initialParams={{ id: eventId, sessionId: sessionId }}
        options={{
          title: subSessionName,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('ScheduleDetail', { id: eventId, sessionId: sessionId, subSessionName: subSessionName }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={SubSessionDetail} />
    </Stack.Navigator>
  )
}


export function ScheduleDetailStack({ route, navigation }) {

  const eventId = route.params?.id;
  const sessionId = route.params.sessionId
  const scheduleName = route.params.scheduleName;


  console.log("TitleName " + scheduleName + " eventid" + eventId + " sessionId" + sessionId)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ScheduleDetailStack'
        initialParams={{ id: eventId, sessionId: sessionId }}
        options={{
          title: scheduleName,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('Schedule', { id: eventId, sessionId: sessionId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={ScheduleDetail} />
    </Stack.Navigator>
  )
}

export function SpeakerDetailByNamelStack({route,navigation}){
  const eventId = route.params.id;
  const sessionId = route.params.sessionId
  const scheduleName = route.params.scheduleName;
  console.log("TitleName "+scheduleName)
  return (
      <Stack.Navigator>
          <Stack.Screen 
          name='Speaker Detail By Name' 
          initialParams={{id:eventId,sessionId}}
          options={{
            title:scheduleName,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerLeft: () => 
            (
              <TouchableOpacity onPress={()=>{navigation.navigate('Speakers',{id:eventId})}}>
              <AntDesign style={{marginLeft:10}} name="arrowleft" size={22} color="#fff" />
              </TouchableOpacity>
            ),
            headerTintColor:'#fff',


          }}
          component={SpeakerDetailByName} />
      </Stack.Navigator>
  )
}


export function SpeakerDetaillStack({route,navigation}){
  const eventId = route.params.id;
  const sessionId = route.params.sessionId
  const scheduleName = route.params.scheduleName;
  console.log("TitleName "+scheduleName)
  return (
      <Stack.Navigator>
          <Stack.Screen 
          name='Speaker Detail' 
          initialParams={{id:eventId,sessionId}}
          options={{
            title:scheduleName,
            headerStyle: {
              backgroundColor: '#e36a4c',
            },
            headerLeft: () => 
            (
              <TouchableOpacity onPress={()=>{navigation.navigate('ScheduleDetail',{id:eventId})}}>
              <AntDesign style={{marginLeft:10}} name="arrowleft" size={22} color="#fff" />
              </TouchableOpacity>
            ),
            headerTintColor:'#fff',


          }}
          component={SpeakerDetail} />
      </Stack.Navigator>
  )
}


export function ScheduleTopTab({ route, navigation }) {

  const eventId = route.params.id;
  console.log("line no 51 " + eventId);
  return (
    <Tab.Navigator>
      {/* 4517b59c old color */}
      <Tab.Screen
        name="Schedule"
        initialParams={{ id: eventId }}
        component={Schedule}
        options={{
          title: "All Sessions",
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }
        }}

      />

      <Tab.Screen
        name="My Schedule"
        component={MySchedule}
        initialParams={{ id: eventId }}
        options={{
          title: "My Schedule",
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }
        }}

      />

    </Tab.Navigator>
  );
}


export function EventFeedWebView({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='EventFeedWebView'
        initialParams={{ id: eventId }}
        options={{
          headerShown:false,
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#e36a4c',
          },
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => { navigation.navigate('EventDetails1', { id: eventId }) }}>
              <AntDesign style={{ marginLeft: 10 }} name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: '#fff',


        }}
        component={EventFeed} />
    </Stack.Navigator>
  )
}




export function ActivityFeedTopTab({ route, navigation }) {
  const eventId = route.params.id;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EventFeed"
        component={EventFeed}
        initialParams={{ id: eventId }}
        options={{
          headerShown:false,
          title: "Event Feed",
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }


        }}

      />

      {/* <Tab.Screen
        name="SocialWall"
        component={SocialWall}
        initialParams={{ id: eventId }}
        options={{
          title: 'Social Wall',
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }
        }}
        activeColor={{ backgroundColor: 'white', height: 5 }}
      /> */}
    </Tab.Navigator>
  )
}

export function EventGuidBottomTab() {
  return (
    <bottomTab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
    >
      <bottomTab.Screen
        name='Event Guide'
        component={EventDetails}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#4517b59c',
          },
          tabBarActiveTintColor: '#fff',
          headerTintColor: "#fff",
          tabBarIcon: () => (
            <MaterialIcons name="emoji-events" size={24} />
          )
        }}
      />

      <bottomTab.Screen
        name='Schedule'
        component={Schedule}
        options={{
          headerStyle: {
            backgroundColor: '#4517b59c',
          },
          tabBarActiveTintColor: '#fff',
          headerTintColor: "#fff",
          headerRight: () => (
            <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.iconeMargin} />
          )
        }}
      />

      <bottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#4517b59c',
          },
          tabBarActiveTintColor: '#fff',
          headerTintColor: "#fff",
          headerRight: () => (
            <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.iconeMargin} />
          )
        }}
      />

      <bottomTab.Screen
        name='More'
        component={More}
        options={{
          headerStyle: {
            backgroundColor: '#4517b59c',
          },
          tabBarActiveTintColor: '#fff',
          headerTintColor: "#fff",
          headerRight: () => (
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          )
        }}
      />

    </bottomTab.Navigator>


  )
}


export function GcmEventTabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen
        name="Upcoming"
        component={CurrentAndUpcoming}
        options={{
          title: 'Upcoming Events',
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }

        }}

      />
      <Tab.Screen
        name="Past"
        component={ListComponent}
        options={{
          title: 'Past Events',
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0d84be',
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff'
          }
        }}
        activeColor={{ backgroundColor: 'white', height: 5 }}
      />
    </Tab.Navigator>

  )
}


const styles = StyleSheet.create({
  iconeMargin: {
    marginRight: 10
  }
})