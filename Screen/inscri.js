import React, {useContext, useState , useEffect} from 'react';
import { StyleSheet, Text, View , ImageBackground ,  Keyboard,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity , ToastAndroid} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import PropTypes from 'prop-types';
//import {AuthContext} from '../contexte/AuthContext';
const Register = ({navigation}) => { 
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState('');
  const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const[station , setStation] = useState('')
const [profileImage, setProfileImage] = useState('');
  const [progress, setProgress] = useState(0);
  const[error , setError]=useState(false);


  
  const { width, height } = Dimensions.get('window');

  const [mapRegion, setmapRegion] = useState({
  
    latitude: 36.8002068,
    longitude: 	10.1857757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
 
    }
  
  );

  onChangeValue = mapRegion =>{
   // ToastAndroid.show(JSON.stringify(mapRegion), ToastAndroid.SHORT)
    setmapRegion({
      mapRegion
    })
    setLongitude(mapRegion.longitude)
  setLatitude(mapRegion.latitude)
  
 console.log(mapRegion.latitude);
  }



  
  //  const {isLoading, register} = useContext(AuthContext);
  async function Add(){
    console.log({
      Nom_station,
      email,
      ville,
      adresse,
      avatar

    })
    
    if(!Nom_station  || !email || !password || !longitude ||!ville || !adresse || !latitude   || password.length<6){
      setError(true);
      return false;
        
    }
   
    fetch("http://192.168.43.230:3001/utilisateur/register", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: 
        JSON.stringify({
          Nom_station: Nom_station,
          type_lavage: type_lavage,
          ville: ville,
          adresse: adresse,
          longitude: longitude,
          latitude: latitude,
          email: email,
          password: password,
          Role: 'lavage',
          avatar: profileImage
        }),
    }).then(res => res.json())
      .then(async data => {
        if (data) {
          if (data.email != '' && data.password != '') {
            navigation.navigate('signin')
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      console.log({response: response})
      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await station.post('/register', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',

        },
      });

      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace('StationProfile'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  
  return (
    <>
 
      <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView style={styles.scrollView}>
      <View style={{alignItems:'center' , alignSelf:'center'}}>
     <Text style={{color:'#4A919E' , fontWeight:'bold' , marginBottom:10 , fontSize:20}}>Register</Text>
      </View>
      <View style={styles.containerr}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
         {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: '100%', height: '100%' }}
            
            />
            ) : ( <Text style={styles.uploadBtn} onChangeText={(text)=>setProfileImage(text)}>image</Text>
              
            )}
        </TouchableOpacity>
        
        
      </View>
      
    </View>
      <View style={{flex:1}}>
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: 250 }}
        //region={mapRegion}
        onRegionChangeComplete= {onChangeValue}
        provider={PROVIDER_GOOGLE}

     region= {{
       
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta:mapRegion.latitudeDelta,
        longitudeDelta:mapRegion.longitudeDelta,}}
  
      />

<Marker

coordinate={{
latitude:36.8002067,
longitude:10.1857759,

}}
source= {require('../assets/marque.png')}
title="lavage "

/>
     
      <View style={{top: '50%', left: '50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style={{height:48, width:48}} source= {require('../assets/marque.png')}/>
        </View>

    </View>
<View>
  

</View>

    </View>
        
      
    <View  >
     
     
     <TextInput 
      style={styles.input}
      type={Number}
      placeholder={'logitude'}
      placeholderTextColor={'grey'}
      underLineColorAndroid='transparent'
      defaultValue={`${longitude}`}
      onChangeText={text => setLongitude(text)}
      />
          </View>
  <View  >
   
   
   <TextInput 
    style={styles.input}
    placeholder={'latitude'}
    placeholderTextColor={'grey'}
    defaultValue={`${latitude}`}
    underLineColorAndroid='transparent'
    onChangeText={text => setLatitude(text)}
    />
         </View>
    

     
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom station'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setNom_station(text)}
        />
        {error && !Nom_station &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12  ,fontWeight:'bold'}} > champ obligatoire *</Text>}
                                 
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Type lavage'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setType_lavage(text)}
        
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Ville'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setVille(text)}
        />
            {error && !ville &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12 , fontWeight:'bold'}} > champ obligatoire *</Text>}
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Adresse'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setAdresse(text)}
        />
            {error && !adresse &&<Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12 , fontWeight:'bold'}} > champ obligatoire *</Text>}
    </View>
    
    
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setEmail(text)}
        />
            {error && !email && <Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12 , fontWeight:'bold'}} > champ obligatoire *</Text>}
            
    </View>
    <View >
       
        <TextInput 
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={'grey'}
        secureTextEntry
        underLineColorAndroid='black'
        onChangeText={text => setPassword(text)}
        required
        />
        {error && !password && <Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12 , fontWeight:'bold'}} > champ obligatoire *</Text>}
  
        
        {error && password.length<6 && <Text style={{color:'red' , alignContent:'center' , alignSelf:'center',fontSize:12 , fontWeight:'bold'}} > Mot de passe doit contenir minimum 6 caractére</Text>}
  
        
      </View>
      
      <TouchableOpacity style={styles.btnLogin} onPress={() => {
            Add();
          }}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20 ,marginBottom:30 ,alignItems:'center',
        alignSelf:'center'}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
          </TouchableOpacity>
        </View>
    
        
    </ScrollView>
    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: '#4A919E',
justifyContent: 'center',
marginTop : 20,
alignItems:'center',
alignSelf:'center'
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 15,
    alignSelf:'center',
    alignItems:'center'

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
 
  link: {
    color: 'blue',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  
});
export default Register;