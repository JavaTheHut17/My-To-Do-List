import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageButton from "../Components/ImageButton";
import { saveData, loadData, updateSave } from "../DataModel/AppData";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddToDoItem } from "./AddToDoItem";
import BackButton from "../Components/BackButton";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  const [taskTitle, setTitle] = useState("");
  const [taskDes, setDes] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isBoxPressed, setIsBoxPressed] = useState(false);
  const [name, setName] = useState("caretdown");
  const [selectedItem, setSelectedItem] = useState(null);

  //Total Items in to do List
  useEffect(() => {
    const temp = data.length;
    setCount(temp);
  }, [data]);

  // Navigation Button Handler
  const navToDetail = () => {
    navigation.navigate("AddToDoItem");
  };

  //Load Data on screen change
  useFocusEffect(
    React.useCallback(() => {
      const loadDataFromStorage = async () => {
        try {
          const loadedData = await loadData();
          setData(loadedData || []);
          setCount(loadedData.length || 0);
        } catch (error) {
          console.error("Error loading data:", error);
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
      console.error("Error loading data:", error);
    }
  };

  //Clear Storage
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Async storage cleared successfully.");
      setData([]);
    } catch (error) {
      console.log("Failed to clear async storage:", error);
    }
  };

  //Remove Item from Storage
  const removeItemFromStorage = async (keyToRemove) => {
    try {
      const updatedData = data.filter((item) => item.taskTitle !== keyToRemove);

      await AsyncStorage.clear();
      updateSave(updatedData);
      loadDataFromStorage();

      console.log(`Item with key '${keyToRemove}' removed successfully.`);
    } catch (error) {
      console.log(`Failed to remove item with key '${keyToRemove}':`, error);
    }
  };
  //Item Completed Colour Handler
  const colorHandler = (taskTitle) => {
    setSelectedItem(taskTitle);
  };
  //Caret Arrow Changer
  const toggleBoxPress = () => {
    setIsBoxPressed(!isBoxPressed);

    if (name == "caretdown") {
      setName("caretup");
    }
    if (name == "caretup") {
      setName("caretdown");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <Text style={styles.titleI}>Items:{count} </Text>
      <View style={styles.lineTop}></View>
      <StatusBar style="auto" />

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.listItemBox,
                selectedItem == item.taskTitle && styles.selectedBox,
              ]}
            >
              <Text style={styles.listItemTextTitle}>{item.taskTitle}</Text>
              {isBoxPressed && (
                <Text
                  style={[
                    styles.listItemTextBody,
                    selectedItem == item.taskTitle && styles.selectedBox,
                  ]}
                >
                  {item.taskDes}
                </Text>
              )}
              <View style={styles.iconBox}>
                <AntDesign
                  name="delete"
                  style={styles.delIcon}
                  onPress={() => removeItemFromStorage(item.taskTitle)}
                  size={20}
                  color="red"
                />
                <AntDesign
                  name={[name]}
                  onPress={() => toggleBoxPress()}
                  style={styles.caretDown}
                  size={20}
                  color="black"
                />
                <AntDesign
                  name="checkcircle"
                  onPress={() => colorHandler(item.taskTitle)}
                  style={styles.tickIcon}
                  size={20}
                  color="green"
                />
              </View>
            </View>
          )}
        ></FlatList>
      </View>
      <View style={styles.lineBottom}></View>

      <ImageButton
        color="blue"
        title={" Add To-do Item"}
        onPress={navToDetail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    position: "absolute",
    top: 20,
    fontSize: 20,
    fontWeight: "bold",

    padding: 1,
  },
  titleI: {
    marginTop: 15,
    fontSize: 15,
  },

  lineTop: {
    height: 3,
    width: "90%",
    backgroundColor: "black",
    top: 55,
    position: "absolute",
  },

  lineBottom: {
    height: 2,
    width: "90%",
    backgroundColor: "black",
    bottom: 80,
    position: "absolute",
  },

  listContainer: {
    height: "70%",
    backgroundColor: "white",
    width: "90%",
    bottom: 15,
    marginTop: 20,
  },
  listItemBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    backgroundColor: "blue",
    width: "90%",
    marginLeft: 15,
    padding: 8,
    marginTop: 8,
    borderRadius: 8,
  },

  listItemTextTitle: {
    fontWeight: "bold",
    color: "black",
    padding: 10,
    fontSize: 15,
  },
  listItemTextBody: {
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },

  testB: {
    color: "white",
    backgroundColor: "white",
    alignContent: "center",
  },

  delIcon: {
    opacity: 0.9,
    marginRight: 50,
  },

  tickIcon: {},
  iconBox: {
    flexDirection: "row",
    alignContent: "center",
    width: "auto",
    marginLeft: 30,
    marginRight: 10,
    alignSelf: "flex-end",
  },

  caretDown: {
    marginRight: 40,
  },

  selectedBox: {
    backgroundColor: "green",
  },
});
