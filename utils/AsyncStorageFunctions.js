import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("station");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
export const updateUserData = async (data) => {
  return AsyncStorage.setItem('station', JSON.stringify(data));
}
export const storeUserData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
   
  
      await AsyncStorage.setItem("station", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  export const LogoutUser = async (token) => {
    try {
      fetch("http://192.168.43.230:3001/utilisateur/logout" , {
                method: 'GET',
                headers: { "Authorization": `Bearer ${token}` },
              })
              .then(res=>res.json())
            .then(async res=>{
          if(res.status==true){   
          
            await AsyncStorage.removeItem("station");
          
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