import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web';
import { getUserData } from '../utils/AsyncStorageFunctions';

export default function MesReservation() {
    const [reservations, setReservations] = useState()
    const [station, setStation] = useState()
    const [id, setId] = useState()

    useEffect(async () => {
        const data = await getUserData();
        setStation(data)
        setId(data.data.station.id)
    }, []);

    useEffect(() => {
        // k ta3mlou api yjib les reservations par station tnajmou thtouh fel lena
        if (station) {
            fetch("http://192.168.43.230:3001/reservation/getAllReservation")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setReservations(res.filter(res => res.idStation == station?.data?.station?._id));
                })
                .catch((err) => console.error(err));
            console.log("reservation:", reservations)
            console.log("station:", station)
        }
    }, [station])

    const deleteReservation = () => {
        // delete reservation
    }

    const acceptReservation = () => {
        // update etat reservation
    }

    return (
        <View>
            <Text>
                liste des réservations
            </Text>
            <View>
                {reservations ? reservations.map((reservation) => (
                    <View style={{ flex: 1, flexDirection: "column", padding: 10 }} key={reservation.id}>
                        <Text>{reservation.date_heure}</Text>
                        <Text>{reservation.etat == true ? <Text>Réservation accepté</Text> : <View>
                            <Text>
                                Réservation non accepté
                            </Text>
                            <Text>Accepter</Text>
                            <Text>Supprimer</Text>
                        </View>
                        }</Text>
                    </View>
                )) :
                    <View>
                        <Text>
                            Essayez ultérieurement
                        </Text>
                    </View>
                }
            </View>
        </View>
    )
}
