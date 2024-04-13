import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BackButton from '../Components/BackButton';
import SaveButton from '../Components/SaveButton';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, TextInput } from 'react-native-gesture-handler';
import { saveData, loadData } from '../DataModel/AppData';
import AsyncStorage from '@react-native-async-storage/async-storage';

 
export function AddToDoItem() {
  const navigation = useNavigation();
  const [taskTitle, setTitle] = useState('');
  const [taskDes, setDes] = useState('');

const setTitleHandler = (val) =>setTitle(val)
const setDesHandler =(val) => setDes(val)



//Save Button Handler
const SubmitHandler =() => {
  
  saveData({taskTitle, taskDes})
  // loadDataFromStorage();

  
}

// Back Button Handler
const navToDetail = async () => {
  navigation.navigate('Home')
  
}

  
  return (

    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />
      <Text style={styles.TextBoxTitle}>Title:</Text>
      <TextInput style={styles.TitleTextBox} placeholder='Enter Title:' value={taskTitle} onChangeText={setTitleHandler}></TextInput>

      <Text style={styles.TextBoxBody}>Description:</Text>
      <TextInput multiline={true} numberOfLines={4} style={styles.BodyTextBox} placeholder='Enter Description:'
      value={taskDes} onChangeText={setDesHandler}>
      </TextInput>


      <View style={styles.NavButton}>
      <BackButton title=' Back' onPress={navToDetail}></BackButton>
      <SaveButton  title=' Save' onPress={SubmitHandler} ></SaveButton>
     
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


  NavButton:{

flexDirection:'row',
// top:140,
// width:'80%',


  


  },
  TitleTextBox:{
width:300,
height:30,
borderWidth:1,
borderColor:'black',
bottom:20,
borderRadius:7,




  },

  TextBoxTitle:{

    fontSize:20,
    fontWeight:'bold',
    bottom:30,
    width:'80%',
flexDirection:'row',
alignItems:'flex-start',


  },
  BodyTextBox:{
    width:300,
    height:200,
    borderWidth:1,
    borderColor:'black',
    top:30,
    borderRadius:7,
    
    
    
    
      },
    
      TextBoxBody:{
    
        fontSize:20,
        fontWeight:'bold',
        top:20,
        width:'80%',
    flexDirection:'row',
    alignItems:'flex-start',
    
      },

 
});