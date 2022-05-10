import React from 'react';
import {Text, StyleSheet, View, Image , Pressable , ScrollView , SafeAreaView,Dimensions} from 'react-native';

import logo from '../assets/ll.png'
import logo1 from '../assets/carr.jpg'
const {width:WIDTH} =Dimensions.get('window')
const {height:HEIGHT} =Dimensions.get('window')
const OnBoardScreenL = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView style={styles.scrollView}>
    <View style={{
      
        flexDirection: "row"
      }}> 
    <View style={{
        left:0,
      
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'whitesmoke',
        width:WIDTH/2,
        height:HEIGHT
      }}>
        <Text  style={
            {
              alignItems:'center',
              textAlign:'center',
              
              fontSize:15,
              
              fontWeight:'bold',
              marginTop:50
            }
  
        }>Client</Text>
         <Image source={logo}  style={{
        width: 160,
        height: 160,
       
       
        
        left: 0,
        marginTop: 90,}}/>  
        <Pressable onPress={() => navigation.navigate('LoginC')}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Enter</Text>
            </View>
          </Pressable>
      </View>
      <View style={{
       right: 0,
       alignItems:'center',
       alignContent:'center',
      backgroundColor:'white',
      width:WIDTH/2,
      height:HEIGHT
    }}>
      <Text style={
          {
            alignItems:'center',
            textAlign:'center',
           fontSize:15,
            fontWeight:'bold',
            marginTop:50,
            marginEnd:30
          }

      }>Station Lavage</Text>
       <Image source={logo1}  style={{
    width: 130,
   
    height: 160,
    marginEnd:30,
    marginBottom:10,
    justifyContent: 'space-between',
    right: 0,
    marginTop: 80,}}/>
    <Pressable  onPress={() => navigation.navigate('signin')} >
          <View style={styles.btn}>
            <Text style={{color: 'white'}}>Enter</Text>
          </View>
        </Pressable>
       </View>  
      </View>
      </ScrollView>
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo:{
    width:120,
    height:120,
  },
  scrollView: {
    backgroundColor: '#E6E6E6',
    marginVertical: 0,
  },
  btn: {
    height: 50,
    width: 130,
    marginStart:10,
    backgroundColor: 'black',
    marginTop: 70,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd:20,
    marginBottom:130
  },
  logoContainer:{
    alignContent:'flex-start',
    flexDirection:'row',
    alignItems:'center',
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    marginBottom:30
    },
  
});

export default OnBoardScreenL;