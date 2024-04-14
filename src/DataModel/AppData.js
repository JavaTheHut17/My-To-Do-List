import AsyncStorage from "@react-native-async-storage/async-storage";

let key = "To DO items: ";

//Load Data
export const loadData = async () => {
  try {
    const str = await AsyncStorage.getItem(key);
    if (str != null) {
      const MyData = JSON.parse(str);
      return MyData;
    }
    return (dummyarry = []);
  } catch (e) {
    console.log(`fail ${key} `, e);
    return console.log("error");
  }
};

let temp = 0;
//First Save Function
export async function saveData(MyData) {
  try {
    const existingData = await loadData();

    const dataArray = Array.isArray(existingData) ? existingData : [];

    dataArray.push(MyData);

    const str = JSON.stringify(dataArray);

    await AsyncStorage.setItem(key, str);
  } catch (e) {
    console.log(`fail to save data`, e);
  }
}

//Second Save Function
export async function updateSave(MyData) {
  try {
    const str = JSON.stringify(MyData);

    await AsyncStorage.setItem(key, str);
  } catch (e) {
    console.log("error");
  }
}
