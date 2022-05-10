import AsyncStorage from "@react-native-async-storage/async-storage";

export const getClientData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("client");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
export const updateClientData = async (data) => {
  return AsyncStorage.setItem('client', JSON.stringify(data));
}
export const storeClientData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
   
  
      await AsyncStorage.setItem("client", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  export const LogoutClient = async (token) => {
    try {
      fetch("http://192.168.43.230:3001/utilisateur/logout" , {
                method: 'GET',
                headers: { "Authorization": `Bearer ${token}` },
              })
              .then(res=>res.json())
            .then(async res=>{
          if(res.status==true){   
          
            await AsyncStorage.removeItem("client");
          
            // navigation.navigate('signin')
           
            }
            else{
              console.log('logout failed')
            }
           
            })
            .catch(err=>{
              console.log(err)
            });
      
     
    } catch (e) {
      console.log(e);
    }
  };