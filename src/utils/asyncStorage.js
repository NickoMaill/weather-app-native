import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        const out = JSON.parse(data);
        if (out !== null) {
            console.log("get", out);
            return out
        }
    } catch (error) {
        console.error(error);
    }
    console.log("done");
}

export const addToStorage = async (key, value, array) => {
    try {
        array.push(value);
        const out = JSON.stringify(array);
        await AsyncStorage.setItem(key, out).finally(() => console.log("ok"));
        console.log("add", out);
        alert("ajouté aux favoris"); 
    } catch (error) {
        console.error(error);
    }
}

export const deleteFromStorage = async (key, value, array) => {
    try {
        array.splice(array.indexOf(value), 1);
        const out = JSON.stringify(array);
        await AsyncStorage.setItem(key, out);
        console.log("del", out);
        alert("supprimé");
    } catch (error) {
        console.error(error);
    }
}