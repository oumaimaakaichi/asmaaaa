import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View ,ScrollView , Button , TextInput , Text , Image , TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from "react";


export default function ForgotPass({navigation}) {
  
   
  return (
   
        <ScrollView>
              
              
            <View style={styles.container1}>
                <Text style={{
          fontSize:20 , 
          fontWeight:"bold",
          marginBottom:15,
          marginTop:10
        }}> Saisir votre email </Text>
                <View style={styles.wrapper}>
            
            
                   
            
            
            

                        <TextInput
                          style={styles.input}
                       
                          placeholder="Votre email"
                          onChangeText={text => setNum_tel(text)}
                          
                        />

                       
                        
                        <TouchableOpacity style={styles.btnLogin}>
       <Text style={styles.TextBtn}>Envoyer</Text>

      </TouchableOpacity>
                </View>
              </View>
          
        </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
    marginTop:20
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
  logo:{
    width:120,
    height:120,
    marginBottom:0,
    marginTop:10
  },
  logoContainer:{
    alignItems:'center'
    },
    btnLogin:{
      width: 250,
      height : 45,
      borderRadius : 25,
      backgroundColor: '#CE6A6B',
      justifyContent: 'center',
      marginTop : 10,
      alignItems:'center',
      alignSelf:'center'
        },
        TextBtn :{
          color : 'white',
          fontSize:16,
          textAlign: 'center'
        },
});