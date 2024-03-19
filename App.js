// import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";

import { createStackNavigator} from '@react-navigation/stack';
import { AddToDoItem } from "./src/screens/AddToDoItem";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name='Home' component={Home}></Stack.Screen>
    <Stack.Screen name='AddToDoItem'component={AddToDoItem}></Stack.Screen>
   </Stack.Navigator> 
   
   </NavigationContainer>
  );
}
