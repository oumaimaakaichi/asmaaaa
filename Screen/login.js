import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Linking, ImageBackground , Image , TextInput ,Dimensions,ScrollView , SafeAreaView, TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/login.jpg'
import { useEffect , useState } from 'react';
import {  Alert, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import Register from './inscri';
import Spinner from 'react-native-loading-spinner-overlay';
const Login = ({navigation}) => {
    const[isLoading , setIsLoading]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
     async function Login(){

    
      
      fetch("http://192.168.43.230:3001/utilisateur/loginST" , {
          method: 'POST',
        
          headers:{
              "Content-Type" : 'application/json',
              "Accept":'application/json'
             
          },
          body:JSON.stringify({
           
            email:email,
            password:password,
           
          }),

        
      }).then(res=>res.json())
      .then(async data=>{
    if(data.status==false  || email=='' || password==''){   
     alert("login failed")
      }
      else{
        console.log(data)
        navigation.navigate('Dashboard')
      }
      })
      .catch(err=>{
        console.log(err)
      });
    
  }
   
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={styles.scrollView}>
    <ImageBackground  style={styles.backgroundContainer}>
       <Spinner visible={isLoading} />
      <View style={styles.logoContainer}>
        <Image source={logo}  style={styles.logo}/>
       
      </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'grey'}
        onChangeText={text => setEmail(text)}
        underLineColorAndroid='transparent'
        />
    </View>
    <View >
       
        <TextInput 
        style={styles.input1}
        placeholder={'Password'}
        placeholderTextColor={'grey'}
        onChangeText={text => setPassword(text)}
        underLineColorAndroid='black'
        secureTextEntry
        />
        
        
        
      </View>
      
      
      <TouchableOpacity style={styles.btnLogin} onPress={() => {
            Login();
          }}>
       <Text style={styles.TextBtn}>Login</Text>

      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20 , marginBottom:30}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: WIDTH-20,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 10,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  input:{
    width:WIDTH-10,
    height:45,
    marginTop:10,
    marginBottom:20,
    borderRadius:25,
    fontSize:16,
    paddingLeft:35,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 25

  },
  scrollView: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  link: {
    color: 'blue',
  },
  input1:{
    width:WIDTH-10,
    height:45,
    marginTop:10,
    marginBottom:20,
    borderRadius:25,
    fontSize:16,
    paddingLeft:35,
    backgroundColor: '#f5f5f5',
    color: 'black',
  
   

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

  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5
},
  logo:{
    width:180,
    height:180,
    marginBottom:20
  }
});
export default Login;
