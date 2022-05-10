import React ,{Component} from 'react';
import { StyleSheet , View , ScrollView , SafeAreaView} from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button , TouchableOpacity ,Text } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
export default class TableExample1 extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  } 
  componentDidMount=()=>{
    const url="http://192.168.43.230:3001/comme/getcomm"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     this.setState({data:resJson})
    })
  }
   Supprimer=(_id)=>{

    
      
    fetch("http://192.168.1.15:3001/comme/deletecomt/"+_id , {
        method: 'DELETE',
      
        headers:{
            "Content-Type" : 'application/json',
            "Accept":'application/json'
           
        },
       

      
    }).then(res=>res.json())
    .then(async data=>{
  
     console.log("supprimer avec succce")
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
          marginTop:30
        }}>Comentaires</Text>
        
              
              <View >
               <SafeAreaView> 
              <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <DataTable style={styles.container}>
       
       <DataTable.Header style={styles.tableHeader}>
         
         <DataTable.Title >avis</DataTable.Title>
         <DataTable.Title  >note</DataTable.Title>
         <DataTable.Title >Action</DataTable.Title>
       </DataTable.Header>
       {
          data.map((item , index)=>{
            return(
       
         <DataTable.Row  >
       <DataTable.Cell >{item.avis}</DataTable.Cell>
       <DataTable.Cell >{item.note}</DataTable.Cell>
       <DataTable.Cell  >
        <MaterialIcons name='delete'size= {20} color='#D90115' onPress={() => {
            this.Supprimer(item._id);
          }}/>
        
       
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
    padding: 5,
    backgroundColor:"white",
    width:400,
    marginEnd:15
  },
  
  tableHeader: {
    backgroundColor: '#DCDCDC',
   
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    
  },
  title:{
    width:200,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal:0,
  
  }
});
/*<DataTable style={styles.container}>
       
<DataTable.Header style={styles.tableHeader}>
  <DataTable.Title>avis</DataTable.Title>
  <DataTable.Title>note</DataTable.Title>
  <DataTable.Title>Action</DataTable.Title>
</DataTable.Header>


  <DataTable.Row>
<DataTable.Cell>{item.avis}</DataTable.Cell>
<DataTable.Cell>{item.note}</DataTable.Cell>
  </DataTable.Row>
  
   

</DataTable>*/