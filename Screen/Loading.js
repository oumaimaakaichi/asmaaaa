import { View, Text,StyleSheet, ActivityIndicator } from 'react-native'
  import React from 'react'
  
  const Loading = () => {
    return (
        <View style={styles.overlay}>
        <View style={styles.container}>
        <ActivityIndicator size={25} color={'white'}/>

        <Text style={styles.text}>Loading...</Text>
        </View>
        </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#45d3f4',
      flexDirection: 'row',
        padding: 20,
        borderRadius: 8,
      },
      overlay: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color:'white',
        marginLeft: 16,
        fontSize: 20,
fontWeight:'600',}
    })
  export default Loading