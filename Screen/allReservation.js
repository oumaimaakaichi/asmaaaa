import React ,{Component} from 'react';
import { StyleSheet , View , ScrollView , SafeAreaView, Alert , Text} from 'react-native';
import { DataTable } from 'react-native-paper';
//import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


export default class Rese extends Component {
 
  constructor(props){
    super(props)
    this.state={
      data:[],
     
      
    }
    
    
  } 
 

  componentDidMount=()=>{
    
    const url="http://192.168.1.4:3001/reservation/getAllReservation"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     this.setState({data:resJson})
    })
  }
   Supprimerr=(_id)=>{

    
      
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
Approuver=(_id)=>{

    
      
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
  //{data.map((item,index)=>{ 
  render() {
    const{ data }=this.state
    return (
      <View style={styles.container}>
        
       
        <Text style={{
          fontSize:20 , 
          fontWeight:"bold",
          marginBottom:15,
         
          color:'black',
          marginStart:10
        }}>Les Reservations</Text>
              
              <View >
               <SafeAreaView> 
              <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <DataTable style={styles.container}>
       
       <DataTable.Header style={styles.tableHeader}>
         
         <DataTable.Title style={styles.title} >Nom et Prenom</DataTable.Title>
         <DataTable.Title style={styles.title} >Nom station</DataTable.Title>
         <DataTable.Title style={styles.title} >date et heure</DataTable.Title>
         <DataTable.Title style={styles.title} >Marque véhicule</DataTable.Title>
         <DataTable.Title style={styles.title} >Nature véhiule</DataTable.Title>
         <DataTable.Title  style={styles.title} >status</DataTable.Title>
         <DataTable.Title style={styles.title}>Action</DataTable.Title>
       </DataTable.Header>
       
       {
          data.map((item , index)=>{
              return(
         <DataTable.Row  >
       <DataTable.Cell style={styles.title1}>{item.Nom_prenom}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.namestation}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.date_heure}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.marque_vehicule}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.Nature_vehicule}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.etat ? (
                            <Text style={{color:'green'}}> Confirmer</Text>
                         
                        ) : (
                         
                            <Text style={{color:'blue'}}>En Attente...</Text>
                         
                        )}</DataTable.Cell>
       <DataTable.Cell  style={styles.title1}>
        <MaterialIcons name='delete'size= {20} color='#D90115' onPress={() => {
            this.Supprimerr(item._id);
          }} style={{marginRight:20}}/>
        <AntDesign name="checkcircle" size={20} color="#22780F" onPress={() => {
            this.Approuver(item._id);
          }} />
       
        </DataTable.Cell>
         </DataTable.Row>
         )
        })
        }
       
       </DataTable>
       </ScrollView>
              </SafeAreaView>
              </View>
             
            
          



      </View>
        
         
      
         


    );
  }
}
 
//export default TableExample;
  
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"white",
    
    marginEnd:15,
    alignContent:'center'
    
  },
  
  tableHeader: {
    backgroundColor: '#DCDCDC',
   width:'100%',
   alignContent:'center',
   alignItems:'center'
    
    
  },
  title1:{
 
    fontSize:2,
    marginRight:10
  },
  title:{
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
   fontWeight:'bold',
   marginLeft:10,
   width:'20%',
   marginRight:40,
   alignContent:'center'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal:0,
    
  
  }
});
