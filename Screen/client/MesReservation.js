import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web';
import { getClientData } from '../../utils/AsyncStorageClient';

export default function MesReservation() {
    const [reservations, setReservations] = useState()
    const [client, setClient] = useState()
    const [nom, setNom] = useState()
    useEffect(async () => {
        const data = await getClientData();
        setClient(data);
        setNom(data.data.utilisateur.nom)

    }, []);

    useEffect(() => {
        // k ta3mlou api yjib les reservations par user tnajmou thtouh lena
        if (client) {
            fetch("http://192.168.43.230:3001/reservation/getAllReservation")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setReservations(res.filter(res => res.Nom_client == client?.data?.utilisateur.nom));
                })
                .catch((err) => console.error(err));
            console.log(nom)
            console.log(client?.data?.utilisateur.nom)
            console.log(reservations)
        }
    }, [client])

    const deleteReservation = () => {
        // delete reservation
    }

    const UpdateReservationInfo = () => {
        // update date, maruque voiture et type voiture
    }

    return (
        <View>
            <Text>
                liste de vos réservation
            </Text>
            <View>
                {reservations ? reservations.map((reservation) => (
                    <View style={{ flex: 1, flexDirection: "column", padding: 10 }} key={reservation.id}>
                        <Text>{reservation.date_heure}</Text>
                        <Text>{reservation.etat == true ? <Text>Réservation accepté</Text> : <View>
                            <Text>
                                Réservation pas encore accepté
                            </Text>
                        </View>
                        }</Text>
                    </View>
                )) : "Essayez ultérieurement"}
            </View>
        </View>
    )
}
