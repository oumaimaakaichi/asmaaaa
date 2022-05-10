import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Button, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import { getUserData, LogoutUser, storeUserData, updateUserData } from "../utils/AsyncStorageFunctions";
import profl from '../assets/p.png'
import * as ImagePicker from 'expo-image-picker';
export default function Update({ navigation }) {
  const [station, setStation] = useState('')
  const [email, setEmail] = useState('')
  const [Nom_station, setNom_station] = useState('')
  const [ville, setVille] = useState('')
  const [adresse, setAdresse] = useState('')

  const [avatar, setAvatar] = useState('')




  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setAvatar(response.uri);
      }
    }
  };

  const editProfile = async () => {
    console.log(station.data)
    console.log({
      Nom_station,
      email,
      ville,
      adresse,
      avatar

    })
    fetch("http://192.168.43.230:3001/utilisateur/ms/" + station.data.station._id, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        Nom_station,
        email,
        ville,
        adresse,
        avatar

      }
      )
    }).then(res => res.json())
      .then(async (res) => {
        console.log(res)
        const newStation = { ...station };
        newStation.data.station = { ...newStation.data.station, ...res }
        await updateUserData(newStation);
        navigation.navigate("Dashboard")
      }


      )
      .catch((err) => { console.warn(err) })
  }

  useEffect(async () => {
    const data = await getUserData();
    setStation(data);
    setEmail(data.data.station.email)
    setNom_station(data.data.station.Nom_station)
    setVille(data.data.station.ville)
    setAdresse(data.data.station.adresse)
    setAvatar(data.data.station.avatar)
    console.log(station)
  }, []);
  return (
    <>
      {station != undefined ?
        <ScrollView>
          <View style={styles.containerr}>
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 10,
              alignItems: 'center',

            }}> Profil </Text>
            <View>
              <TouchableOpacity
                onPress={openImageLibrary}
                style={styles.uploadBtnContainer}
              >
                {avatar ? (
                  <Image
                    source={{ uri: avatar }}
                    style={{ width: '100%', height: '100%' }}

                  />
                ) : (<Text style={styles.uploadBtn} onChangeText={(text) => setAvatar(text)}>image</Text>

                )}


              </TouchableOpacity>



            </View>
          </View>

          <View style={styles.container1}>

            <View style={styles.wrapper}>


              <TextInput
                style={styles.input}
                editable={true}
                defaultValue={station?.data?.station?.Nom_station}
                placeholder="Nouvelle nom de station"
                onChangeText={text => setNom_station(text)}

              />




              <TextInput
                style={styles.input}
                defaultValue={station?.data?.station.email}
                placeholder="Nouvelle  email"
                onChangeText={text => setEmail(text)}

              />

              <TextInput
                style={styles.input}
                defaultValue={station?.data?.station.ville}
                placeholder="Nouvelle Ville"
                onChangeText={text => setVille(text)}


              />
              <TextInput
                style={styles.input}
                defaultValue={station?.data?.station.adresse}
                placeholder="Nouvelle adresse"
                onChangeText={text => setAdresse(text)}

              />


              {/*<Button
                      
                          title="update"
                          onPress={() => {
                            editProfile()
                          }}
                        />*/}
              <TouchableOpacity style={styles.btnLogin} onPress={() => {
                editProfile()
              }}>
                <Text style={styles.TextBtn}>update</Text>

              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        : null}
    </>
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
    marginTop: 20
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 0,
    marginTop: 10
  },
  logoContainer: {
    alignItems: 'center'
  },
  btnLogin: {
    width: 250,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#4A919E',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  TextBtn: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,

    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});