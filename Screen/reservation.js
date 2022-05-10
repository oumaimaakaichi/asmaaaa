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
  FlatList,
} from "react-native";


import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
const App5 = ({ navigation }) => {
  const[data , setData]=useState('')
  



  const[station , setStation]=useState('')

useEffect(async () => {
  setStation(await getUserData());
 
  console.log(station)
}, []);
 /* const componentDidMount =  () =>{
    const url="http://192.168.1.4:3001/reservation/getByS/"+station.data.station._id
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     setData({data:resJson})
     console.log(data)
    })
  }*/

  useEffect(async () => {
   
    fetch("http://192.168.43.230:3001/reservation/getByS/"+station.data.station._id)
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON)
        setData(resJSON);
       
      })
      .catch((err) => console.error(err));
  }, []);





  const Approuver = async (_id) => {

    
      
    fetch("http://192.168.1.4:3001/reservation/updateEtat/"+_id , {
        method: 'PUT',
      
        headers:{
            "Content-Type" : 'application/json',
            "Accept":'application/json'
           
        },
       

      
    }).then(res=>res.json())
    .then(async data=>{
  
    console.warn("confirmer avec succce")
    })
    .catch(err=>{
      console.log(err)
    });
  }

  const Supprimerr = async (_id) => {

    
      
    fetch("http://192.168.1.4:3001/reservation/deleteres/"+_id , {
        method: 'DELETE',
      
        headers:{
            "Content-Type" : 'application/json',
            "Accept":'application/json'
           
        },
       

      
    }).then(res=>res.json())
    .then(async data=>{
  
    console.warn("supprimer avec succce")
    })
    .catch(err=>{
      console.log(err)
    });

  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EEECF2",
      }}
    >
      <View style={StyleSheet.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            console.log('====================================');
            console.log(item);
            console.log('====================================');
            return (
              <>
               

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#E0F2F7",
                    marginBottom: 10,
                    marginTop:10,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
                    padding: 10,
                    marginStart:7,
                    marginEnd:8

                  }}
                >
                  
                 
                  <View style={{ flex: 1, flexDirection: "column" , padding:10}}>
                    <Text style={{fontSize:19 , fontWeight:'bold' , marginBottom:10}}>Reservation:</Text>
                  <View style={{
      
                      flexDirection: "row"
                    }}>
                            <Text style={{fontWeight:'bold' , marginStart:10}}>Client: </Text>
                  <Text style={styles.WrapText}>{item.Nom_client} </Text>
                  <Text style={styles.WrapText}>{item.Prenom_client} </Text>
                 

  </View>
  <Text style={{fontWeight:'bold' , marginStart:10}}> {item.etat ? (
                            <Text style={{color:'green'}}> Confirmer</Text>
                         
                        ) : (
                         
                            <Text style={{color:'blue'}}>En Attente...</Text>
                         
                        )}</Text>
                  <View style={{
      
                        flexDirection: "row",
                        alignContent:'center',
                        alignItems:'center',
                        alignSelf:'center',
                        marginTop:10
                      }}>
                         <MaterialIcons name='delete'size= {25} color='#D90115'  style={{marginRight:30 , marginLeft:20}}  />
                        <AntDesign name="checkcircle" size={20} color="#22780F"  />
                          <AntDesign name="eyeo" size={26} color="black" style={{marginStart:30 }} />
                      
                        
                  {/*<TouchableOpacity style={styles.btnLogin} >
                      <Text style={styles.TextBtn}>supprimer</Text>

                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnLoginn} >
                      <Text style={styles.TextBtn}>Confirmer</Text>

                  </TouchableOpacity>*/}
                      </View>
                  </View>
                  <View>
                    
                  </View>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: "#F0F0F0",
                  }}
                ></View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default App5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  WrapText: {
    
marginStart:2,
    marginEnd:0,
   
    fontSize:13,
    marginBottom:15
  },
  btnLogin:{
    width: 95,
    height : 35,
    borderRadius : 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop : 10,
    marginStart:10
      },
      btnLoginn:{
        width: 95,
        height : 35,
        borderRadius : 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginTop : 10,
        marginStart:10
        
          },
      TextBtn :{
        color : 'white',
        fontSize:16,
        textAlign: 'center'
      },
});
