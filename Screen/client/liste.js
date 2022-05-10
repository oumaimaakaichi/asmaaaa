import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Constants } from "expo-constants";
const { width: WIDTH } = Dimensions.get('window')
export default function Liste_stas({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://192.168.43.230:3001/utilisateur/getAll")
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON)
        setData(resJSON);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);




  const navigations = async () => { navigation.navigate('addreservation') }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#EEECF2",
          width: WIDTH - 30

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
                  {/* <Text>{item.email}</Text>
                <Text>{item.Nom_station}</Text>
                <Text>{item.Role}</Text>
                <Text>{item.avatar}</Text>
                <Image
                  style={{ height: 250, width: 250 }}
                  //source={item.email}
                  source={require("./assets/photo.jpg")}
                  alt="not found"
/>*/}

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      backgroundColor: "#E0F2F7",
                      marginBottom: 10,
                      marginTop: 10,
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
                      marginStart: 7,
                      marginEnd: 8

                    }}
                  >
                    <Image
                      source={{ uri: item.avatar }}
                      style={{ width: 80, height: 70, margin: 5 }}
                    ></Image>
                    <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
                      <Text style={styles.WrapText}>{item.Nom_station}</Text>
                      
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('newreservation', {
                          itemId: item._id,
                          getStation: item,
                        });
                      }} style={styles.btnLogin}>
                        <Text style={styles.TextBtn}>View</Text>

                      </TouchableOpacity>

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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  WrapText: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    fontWeight: 'bold',
    fontSize: 13
  },
  btnLogin: {
    width: 90,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#0594D0',
    justifyContent: 'center',
    marginTop: 10,
    marginStart: 25
  },
  TextBtn: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});
