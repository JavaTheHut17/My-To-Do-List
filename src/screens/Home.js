
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Home({navigation}) {
  const navToDetail = () => {
    navigation.navigate('AddToDoItem')
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />
      <View style={styles.lineBottom}></View>
      <View style={styles.addButton}>
      <Button title='Add New Item' onPress={navToDetail} color={'white'}/>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

title:{
  
    position: 'absolute',
    top: 35,
    fontSize:20,
    fontWeight:'bold',
    

},

lineTop:{

  height:3,
  width:'90%',
  backgroundColor: 'black',
  top:65,
  position:'absolute',

},

lineBottom:{

  height:2,
  width:'90%',
  backgroundColor: 'black',
  bottom:100,
  position:'absolute',

},

addButton:{

  bottom: 40,
  position:"absolute",
  flexDirection:'column',
  backgroundColor: 'blue',
  width:'90%',
  fontWeight:'bold',
  
},


});