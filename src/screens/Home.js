
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../Components/ImageButton';
import { saveData, loadData, updateSave } from '../DataModel/AppData';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddToDoItem } from './AddToDoItem';
import BackButton from '../Components/BackButton';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';



export default function Home() {


  const navigation = useNavigation();
  const [taskTitle, setTitle] = useState('');
  const [taskDes, setDes] = useState('');
  const [data, setData] = useState([]);
  const [count, setCount] =useState(0)
 


  //Total Items in to do List 
useEffect(() => {
  const temp = data.length;
  setCount(temp);
}, [data])


// Navigation Button Handler 
  const navToDetail = () => {
    navigation.navigate('AddToDoItem')
  }

  //Load Data on screen change 
    useFocusEffect(
      React.useCallback(() => {
        const loadDataFromStorage = async () => {
          try {
            const loadedData = await loadData();
            setData(loadedData || []);
            setCount(loadedData.length || 0);
            
          } catch (error) {
            console.error('Error loading data:', error);
          }
        };
        loadDataFromStorage();
      }, [])
    );


    //Page Refresh (load data)
    const loadDataFromStorage = async () => {
      try {
        const loadedData = await loadData();
        setData(loadedData || []);
        setCount(loadedData.length || 0);
        
      } catch (error) {
        console.error('Error loading data:', error);
      }
     
    };
    
  
  
  //Clear Storage
const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Async storage cleared successfully.');
    setData([])
  } catch (error) {
    console.log('Failed to clear async storage:', error);
  }
};

//Remove Item from Storage
const removeItemFromStorage = async (keyToRemove) => {
  try {


    const updatedData = data.filter(item => item.taskTitle !== keyToRemove);

    await AsyncStorage.clear();
    updateSave(updatedData)
    loadDataFromStorage()
    console.log(updatedData)
    console.log(`Item with key '${keyToRemove}' removed successfully.`);
    console.log(data)
  } catch (error) {
    console.log(`Failed to remove item with key '${keyToRemove}':`, error);
  }
};
console.log(data)

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List {count} </Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />

      <View style={styles.listContainer}>
 


<FlatList data={data} keyExtractor={(item)=> item.id}  renderItem={({item})=>
<View style={styles.listItemBox}>
  <Text style={styles.listItemText}>{item.taskTitle}</Text>
  <Text style={styles.listItemText}>{item.taskDes}</Text>
  <Button title='Delete' style={styles.testB}onPress={() => removeItemFromStorage(item.taskTitle)} />
  </View>}>

</FlatList>

     
      </View>
      <View style={styles.lineBottom}></View>
     
<ImageButton color='blue' title={' Add To-do Item'} onPress={navToDetail} />
<ImageButton onPress={clearAsyncStorage}/>
      
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
color:'black',


},

testB:{

color:'white',
backgroundColor:'white',
alignContent:'center'

},


});
