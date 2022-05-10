import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homme from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack = createStackNavigator();
import Register from './Screen/inscri';
import Liste_stas from './Screen/client/liste';
import EspaceClient from './Screen/client/espaceClient';
import Dashboard from './Screen/dashboard';
import Commentaire from './Screen/Commentaire';
import Reservation from './Screen/reservation';
import Profil from './Screen/profil';
import Update from './Screen/update';
import ReservationU from './Screen/client/reservations';
import Profilee from './Screen/prof';
import Signin from './Screen/log';
import Signup from './Screen/inscription';
import Profile from './Screen/client/profile';
import RegisterClient from './Screen/client/registerC';
import LoginC from './Screen/client/LoginC';
import ForgotPass from './Screen/forgotPass';
import App6 from './Screen/client/listeStations'
import App7 from './Screen/client/liste';
import AddReservation from './Screen/client/ajoutReservation';
import App5 from './Screen/res';
import NewReservation from './Screen/client/NewReservation';
import ReservationStation from './Screen/ReservationStation';
import MesReservation from './Screen/client/MesReservation';
export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homme'>
        <Stack.Screen name='Home' component={Homme} options={{ headerShown: false }} />
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL} />
        <Stack.Screen name='Rerse' component={ReservationU}options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='addreservation' component={AddReservation} />
        <Stack.Screen name='Liste_stas' component={Liste_stas} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name='Commentaire' component={Commentaire} options={{ headerShown: false }} />
        <Stack.Screen name='Reservation' component={Reservation} />
        <Stack.Screen name='Profil' component={Profil} />
        <Stack.Screen name='Profilee' component={Profilee} />
        <Stack.Screen name='Update' component={Update} />
        <Stack.Screen name='forgot' component={ForgotPass} />
        <Stack.Screen name='registerC' component={RegisterClient} options={{ headerShown: false }} />
        <Stack.Screen name='LoginC' component={LoginC} options={{ headerShown: false }} />
        <Stack.Screen name='espaceClient' component={EspaceClient} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} />
        <Stack.Screen name='newreservation' component={NewReservation} />
        <Stack.Screen name='mesreservation' component={MesReservation} />
        <Stack.Screen name='reservationstation' component={ReservationStation} />
        <Stack.Screen name='reserv' component={App5} />
      </Stack.Navigator>
    </NavigationContainer>
    /*<View>
      <AddReservation/>
    </View>*/





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
