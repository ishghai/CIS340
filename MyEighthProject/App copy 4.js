import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if(permissionResult.granted == false) {
      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    Console.log(pickerResult)
  }
  const [count, setCount] = useState(0);
  const onTap = () => setCount(count => count + 1);
  return (
    <View style={styles.container}>
      <Image source={{url: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
              style={styles.logo} />
      <Text style={styles.insts}>
        Press the button below to select an image on your phone!

      </Text>

      <TouchableOpacity style={styles.button} onPress = {() => alert('you have not selected an image yet')}>
          <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "blue",
    justifyContent: 'center'
  },

  button: {
    borderRadius: 5,
    backgroundColor: "green",
    padding: 20

  },

  insts: {
    fontSize: 18,
    color: "red",
    marginHorizontal: 15,
    marginBottom: 10

  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});
