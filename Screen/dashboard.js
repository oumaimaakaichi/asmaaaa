import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState , useEffect } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,ScrollView } from 'react-native';
import profile from '../assets/profile.png';
import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Tab ICons...
import home from '../assets/home.png';

import settings from '../assets/settings.png';
import mesreservations from '../assets/l.png';
import logout from '../assets/logout.png';
// Menu
import App5 from './res';
import { Table, Row, Rows } from 'react-native-table-component';


import menu from '../assets/menu.png';
import close from '../assets/close.png';

import photo from '../assets/photo.jpg';
import Rese from './allReservation';

export default function Dashboard({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
 
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  

const[station , setStation]=useState('')

useEffect(async () => {
  setStation(await getUserData());
 /* if(station.data.station.statut==false){
    navigation.navigate('signin')
  }*/
  console.log(station)
}, []);

useEffect(async () => {
const data = await getUserData();
      setStation(data);
      
}, []);







  return (
    <>
     {station  != undefined ?
    <SafeAreaView style={styles.container}>
   
<ScrollView style={styles.s}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
      <TouchableOpacity
        
          style={styles.uploadBtnContainer}
        >
          
            <Image
              source={{ uri: station?.data?.station?.avatar }}
              style={{ width: '100%', height: '100%'  }}
            
            />
           
        
        </TouchableOpacity>

        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15
        }}>{station?.data?.station?.Nom_station}</Text>

        <TouchableOpacity onPress={() => {navigation.navigate("Update")}}>
          <Text style={{
            marginTop: 6,
            color: '#FFBF66',
            fontStyle:'italic'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 20 }}>
          {
            // Tab Bar Buttons....
          }

          <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
    <TouchableOpacity>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 10
      }}>

        <Image source={home} style={{
          width: 25, height: 25,
          tintColor: "#4682b4"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "#4682b4"
        }}>Home</Text>

      </View>
    </TouchableOpacity>

    
   {/* <TouchableOpacity onPress={() => {navigation.navigate("reserv")}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={messages} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Reservation</Text>
      </View>
      </TouchableOpacity>*/}
    <TouchableOpacity >
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={settings} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Settings</Text>
      </View>
    </TouchableOpacity>
    {/*<TouchableOpacity onPress={() => {navigation.navigate("reservationstation")}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={mesreservations} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>Mes reservations</Text>
      </View>
      </TouchableOpacity>*/}
    <TouchableOpacity onPress={() => {
         LogoutUser(station.data.token)
         // pour tester que  async storage est vide
         navigation.navigate('signin')
console.log(AsyncStorage.getItem("station"))
          }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={logout} style={{
          width: 25, height: 25,
          tintColor: "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: "white"
        }}>logout</Text>
      </View>
    </TouchableOpacity>
    </TouchableOpacity>

        </View>

        

      </View>
      
      </ScrollView>
      
      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }
 <ScrollView  style={{marginVertical: 0}}>
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: '#4A919E',
              marginTop: 40,

            }}></Image>

          </TouchableOpacity>
   
          
          <Text style={{
          fontSize:18 , 
          fontWeight:"bold",
         
          marginTop:30,
          color:'black',
          marginBottom:20
          
        }}>Bienvenue dans votre espace</Text>
         <ScrollView  horizontal={true} >
          <App5/>
         
          </ScrollView>
        </Animated.View>
        </ScrollView>
      </Animated.View>

    </SafeAreaView>
    : null}
    </>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {


LogoutUser(station.data.token)

     
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#4682b4" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#4682b4" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A919E',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  s:{
    color:'#4A919E',
    backgroundColor:'#4A919E'
  },
  uploadBtnContainer: {
    height: 100,
    width: 100,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
   
    borderWidth: 0,
    overflow: 'hidden',
    marginTop:20,
  },
});