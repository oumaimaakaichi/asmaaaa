import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const TableExample = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>type véhicule</DataTable.Title>
        <DataTable.Title>date et heure</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>voiture</DataTable.Cell>
        <DataTable.Cell>8/9/2022</DataTable.Cell>
        <DataTable.Cell><MaterialIcons name='delete'size= {20} color='#D90115'/>
        <AntDesign name="checkcircle" size={20} color="#22780F" />

         </DataTable.Cell>
      </DataTable.Row>
  
      
     
      <DataTable.Row>
        <DataTable.Cell>camion</DataTable.Cell>
        <DataTable.Cell>9/9/2022</DataTable.Cell>
        <DataTable.Cell>
        <MaterialIcons name='delete'size= {20} color='#D90115'/>
        
        <AntDesign name="checkcircle" size={20} color="#22780F" />
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};
  
export default TableExample;
  
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});