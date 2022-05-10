import React  , {useState , useEffect}from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";

import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
const App5 = ({ navigation }) => {
  const[data , setData]=useState('')
  



  const[station , setStation]=useState('')

useEffect(async () => {
  setStation(await getUserData());
 
  console.log(station)
}, []);
  const componentDidMount =  () =>{
    const url="http://192.168.1.4:3001/reservation/getByS/"+station.data.station._id
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     setData({data:resJson})
     console.log(data)
    })
  }
  return (
    <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={()=>{componentDidMount()}} style={styles.boutton}>
        <Text style={{color:"black"}}>Cliquer</Text>
        </TouchableOpacity>
      </View>

          
    
  );
};

export default App5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc8783",
  },
  
  boutton:{
    height:42,
    width:200,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:42,
    backgroundColor:"pink"
  }
});