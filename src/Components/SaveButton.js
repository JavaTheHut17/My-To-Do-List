import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SaveButton({title, onPress, color}) {
  
  return (
    <View style= {styles.ButtonBox}>
<TouchableOpacity style={{backgroundColor:color}} onPress={onPress}> 
<AntDesign name="save" size={20} color="white" >
    <Text style={styles.ButtonText}>{title}</Text>
</AntDesign>



</TouchableOpacity>
          </View>
  );
}


const styles = StyleSheet.create({





    ButtonBox:{
    
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'blue',
        top:80,
        width:'22%',
        marginLeft:30,
        padding:3,
        borderRadius:8,
        
      },

      ButtonText:{
        fontWeight:'bold',
        fontSize:17,
        textAlign:'center',
        alignContent:'center',
        justifyContent:"center",
        color:'white',
        
      },

});