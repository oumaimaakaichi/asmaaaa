import React from 'react';
import {StyleSheet , ActivityIndicator,Text , View ,FlatList , Platform , Dimensions , Image} from 'react-native';
const {width:WIDTH} =Dimensions.get('window')
export default class App6 extends React.Component{

constructor(){
    super()
    this.state={
        isLoading:true,
        dataSource:[]
    }
}

componentDidMount(){
    fetch('http://192.168.1.15:3001/utilisateur/getAll')
    .then((response) => response.json())
    .then((responseJson)=>{
        this.setState({
            isLoading:false,
            dataSource:responseJson,
        })
    })
    .catch((error)=>{
        console.log(error)
    });
}
/*_renderItem=({item})=>{
    <Text>{item.Nom_station}</Text>
}*/
render(){
    if(this.state.isLoading){
        return(
        <View style={styles.container}>
            <ActivityIndicator size="large" animating />
            </View>  );
    }
   else{
        return(
            <View>
             <FlatList 
                data={this.state.dataSource}
                renderItem={({item})=>  <View style={{backgroundColor:'whitesmoke' ,width:WIDTH-30 , height:150,marginBottom: 10,borderRadius:20,marginTop:10,marginStart:50 }} >
                    
                    <Image
                        style={styles.image}
                        source={{ uri: item.avatar}}
                        resizeMode='contain'
                        contentContainerStyle={{ padding: 20 }}
                        />
                     <Text style={{marginTop:10 , marginStart:20}}>Nom du station: {item.Nom_station}</Text></View>}
                keyExtractor={(item , index) =>index}



            />
            </View>
        );
   }
    
        
   



    

}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'

    },
    item:{
        flex:1,
        alignContent:'stretch'
    },
    image: {
        width: 100,
        height: 100
      },
})







