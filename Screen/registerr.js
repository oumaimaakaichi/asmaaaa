import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
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
const[Role , setRole]=useState('')
  //  const {isLoading, register} = useContext(AuthContext);
  async function Add(){

    
      
      fetch("http://192.168.1.4:3001/utilisateur/register" , {
          method: 'POST',
        
          headers:{
              "Content-Type" : 'application/json',
             
          },
          body:JSON.stringify({
            Nom_station:Nom_station,
            type_lavage:type_lavage,
            ville:ville,
            adresse:adresse,
            longitude:longitude,
            latitude:latitude,
            email:email,
            password:password,
            Role:'lavage'




          }),

        
      }).then(res=>res.json())
      .then(async data=>{
        if(data){
         if(data.email!='' && data.password!=''){
          navigation.navigate('signin')
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
      <View >
     <Text style={{color:'teal' , fontWeight:'bold' , marginBottom:20 , fontSize:20}}>Register</Text>
      </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom station'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setNom_station(text)}
        />
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
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Adresse'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setAdresse(text)}
        />
    </View>
    
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'logitude'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setLongitude(text)}
        />
    </View>
    <View  >
     
     
     <TextInput 
      style={styles.input}
      placeholder={'latitude'}
      placeholderTextColor={'grey'}
      underLineColorAndroid='transparent'
      onChangeText={text => setLatitude(text)}
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
            Add();
          }}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20 ,marginBottom:30}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
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
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
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
  logo:{
    width:150,
    height:180,
    marginBottom:20
  }
});
export default Register;