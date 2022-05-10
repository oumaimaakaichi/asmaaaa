import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

import { Dimensions, input } from 'react-native-web';
import { getClientData, updateClientData } from "../../utils/AsyncStorageClient";

const { width: WIDTH } = Dimensions.get('window')

export default function NewReservation({ route, navigation }) {
    const { itemId, getStation } = route.params;
    useEffect(() => {
        console.warn(itemId, getStation.Nom_station)
        console.warn(getStation._id)
    }, [])

    const [date_heure, setDate] = useState('');
    const [marque_vehicule, setMarque] = useState('');
    const [Nature_vehicule, setNatureVehicule] = useState('');
    const [id, setId] = useState('')
    const [client, setClient] = useState('')
    const [station, setStation] = useState()

    useEffect(async () => {
        setClient(await getClientData());
        if (getStation) {
            setStation(getStation)
        }
    }, []);





    async function addReservatoin() {
        fetch("http://192.168.43.230:3001/reservation/addres", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                idStation: itemId,
                date_heure: date_heure,
                marque_vehicule: marque_vehicule,
                Nature_vehicule: Nature_vehicule,
                Nom_client: client.data.utilisateur.nom,
                Prenom_client: client.data.utilisateur.prenom,
                Utilistauer:client.data.utilisateur._id,
               Station:getStation._id
            }),
        }).then(res => res.json())
        .then(res => console.log(res))
            .then(res => {
                if(res) {
                    console.log(res)
                    navigation.navigate('Rerse')
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView style={styles.scrollView}>
                
                <View style={{ alignItems: 'center' , backgroundColor:'whitesmoke' , marginTop:20 }}>
                    <Text style={{ color: '#4A919E', fontWeight: 'bold' , fontSize:15 , marginTop:20}}>
                        Information de la station
                    </Text>
                    <Text>Type de lavage:       {station?.type_lavage}</Text>
                    <Text> Ville  :    {station?.ville}</Text>
                    <Text>Adresse    :    {station?.adresse}</Text>
                    <Text style={{marginBottom:20}}>Email :   {station?.email}</Text>

                </View>
                <View style={styles.containerr}>
                    <Text style={{ color: '#4A919E', fontWeight: 'bold' , marginTop:20 }}>Reserver</Text>
                </View>
                <View  >
                    <TextInput
                        style={styles.input}
                        placeholder={'Date et heure'}
                        placeholderTextColor={'grey'}
                        underLineColorAndroid='transparent'
                        onChangeText={text => setDate(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Marque de la véhicule'}
                        placeholderTextColor={'grey'}
                        underLineColorAndroid='transparent'
                        onChangeText={text => setMarque(text)}
                    />
                </View>
                <View  >
                    <TextInput
                        style={styles.input}
                        placeholder={'Nature de la véhicule'}
                        placeholderTextColor={'grey'}
                        underLineColorAndroid='transparent'
                        onChangeText={text => setNatureVehicule(text)}
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => {
                    addReservatoin();
                }}>
                    <Text style={styles.TextBtn}>Ajouter</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
        marginVertical: 10,
    },
    icon: {

        top: 8,
        left: 37,
    },
    btnLogin: {
        width: 200,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center'
    },
    TextBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    link: {
        color: 'blue',
    },
    input: {
        width: 300,
        height: 45,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        fontSize: 10,
        paddingLeft: 45,
        backgroundColor: '#f5f5f5',
        color: 'black',
        marginHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center'

    },
    logoContainer: {
        alignItems: 'center'
    },
    btnEye: {

        top: 17,
        right: 60,
    }
    ,
    logoText: {
        color: 'black',
        fontWeight: 600,
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,
        opacity: 0.5,
        marginBottom: 10
    },
    logo: {
        width: 150,
        height: 180,
        marginBottom: 20
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },

    link: {
        color: 'blue',
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