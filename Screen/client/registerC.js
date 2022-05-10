import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'

import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import client from '../../assets/regis.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';

//import {AuthContext} from '../contexte/AuthContext';
const RegisterClient = ({navigation}) => { 
    const [cin, setCin] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [Num_tel, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [Adr, setUsename] = useState('');
  const [MPass, setPassword] = useState('');

  async function AddClient(){

    
      
      fetch("http://192.168.43.230:3001/utilisateur/register" , {
          method: 'POST',
          headers:{
              "Content-Type" : 'application/json',
             
          },
          body:JSON.stringify({
            cin:cin,
            nom:nom,
            prenom:prenom,
            Num_tel:Num_tel,
            email:email,
            Adr:Adr,
            MPass:MPass,
            role:'client'
          }),
      }).then(res=>res.json())
      .then(async data=>{
        if(data){
         if(data.Adr!='' && data.MPass!=''){
          navigation.navigate('LoginC')
        }}
        
      })
      .catch(err=>{
        console.log(err)
      });
     
      
     
  }
  
  
  
  return (
      <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView style={styles.scrollView}>
    <ImageBackground  style={styles.backgroundContainer}>
    <View style={styles.logoContainer}>
        <Image source={client}  style={styles.logo}/>
       
      </View>
            <View style={styles.container1}>
                <Text style={{
          fontSize:20 , 
          fontWeight:"bold",
          marginBottom:15,
          color:'#4A919E'
        
        }}> Sign In </Text>
        </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Cin'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setCin(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setNom(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Prenom'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setPrenom(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        
        style={styles.input}
        placeholder={'Numéro du téléphone'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setNumero(text)}
        />
    </View>
    
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setEmail(text)}
        />
    </View>
    <View  >
     
     
     <TextInput 
      style={styles.input}
      placeholder={'Username'}
      placeholderTextColor={'grey'}
      underLineColorAndroid='transparent'
      onChangeText={text => setUsename(text)}
      />
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
        
        
        
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => {
            AddClient();
          }}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20 ,marginBottom:30}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('LoginC')}>Login</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground> 
       
        
    </ScrollView>
    </SafeAreaView>
   
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
    backgroundColor: 'pink',
    marginVertical: 10,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 250,
height : 45,
borderRadius : 20,
backgroundColor: '#4A919E',
justifyContent: 'center',
marginTop : 20,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  link: {
    color: '#4A919E',
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
    marginHorizontal : 15

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
container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:150,
    height:150,
   
  }
});
export default RegisterClient;