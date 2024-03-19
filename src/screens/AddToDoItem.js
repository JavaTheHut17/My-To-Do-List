import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export function AddToDoItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />
      
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
      top: 20,
      fontSize:20,
      fontWeight:'bold',
      
  
  },
  
  lineTop:{
  
    height:3,
    width:'90%',
    backgroundColor: 'black',
    top:55,
    position:'absolute',
  
  },
});