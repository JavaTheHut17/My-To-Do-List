import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ImageButton({ title, onPress, color }) {
  return (
    <View style={styles.ButtonBox}>
      <TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
        <Entypo
          style={styles.ButtonText}
          name="squared-plus"
          size={24}
          color="black"
        >
          <Text style={styles.ButtonText}>{title}</Text>
        </Entypo>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "blue",
    top: 40,
    width: "90%",

    padding: 8,
    borderRadius: 8,
  },

  ButtonText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    color: "white",
  },
});
