
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../Components/ImageButton';



export default function Home() {
  const navigation = useNavigation();
  const navToDetail = () => {
    navigation.navigate('AddToDoItem')
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />

      <View style={styles.listContainer}>

      <View style={styles.listItemBox}>
      <Text style={styles.listItemText}>Sweep Floors</Text>
      </View>
      
      <View style={styles.listItemBox}>
      <Text style={styles.listItemText}>Walk Dog</Text>
      </View>
      
      <View style={styles.listItemBox}>
      <Text style={styles.listItemText}>Finish Codeing Assignment</Text>
      </View>

      </View>
      <View style={styles.lineBottom}></View>
      {/* <View styles={styles.addButton}> */}
<ImageButton color='blue' title={' Add To-do Item'} onPress={navToDetail}/>
      {/* <View style={styles.addButton}>
      <Button title='Add New Item' onPress={navToDetail} icon = 'add-circle' color={'white'}/>
      // </View> */}
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

lineBottom:{

  height:2,
  width:'90%',
  backgroundColor: 'black',
  bottom:100,
  position:'absolute',

},

// addButton:{

//   bottom: 40,
//   position:"absolute",
//   flexDirection:'column',
//   backgroundColor: 'blue',
//   width:'90%',
//   // height:'5%',
//   fontWeight:'bold',
  
// },

listContainer:{
height:'70%',
backgroundColor:'white',
width:'90%',
bottom:15,


},
listItemBox:{

  flexDirection:'column',
  justifyContent:'flex-start',
  alignContent:'center',
  backgroundColor:'blue',
  width:'90%',
  marginLeft:15,
  padding:8,
  marginTop:8,
  borderRadius:8,

},

listItemText:{


fontWeight:'bold',
color:'white',


},


});
