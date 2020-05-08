import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if(permissionResult.granted == false) {
      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled == true) {
      return;
    }
    setSelectedImage({localUri: pickerResult.uri});

  };

  let openSharingDialogAsync = async () => {
    if(!(await Sharing.isAvailableAsync()))
    {
      alert('Sharing is not available on my phone');
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);

  };

  if(selectedImage!=null)
  {
    return(
    <View style={styles.container}>
      <Image source={{uri: selectedImage.localUri}} style={styles.selImage}/>

      <TouchableOpacity onPress = {openSharingDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share my Image</Text>
      </TouchableOpacity>
    </View>)
  }

  return (
    <View style={styles.container}>
      <Image source={{url: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
              style={styles.logo} />
      <Text style={styles.insts}>
        Press the button below to select an image on your phone!

      </Text>

      <TouchableOpacity style={styles.button} onPress = {openImagePickerAsync}>
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
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
