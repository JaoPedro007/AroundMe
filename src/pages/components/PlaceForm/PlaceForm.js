import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export function PlaceForm({ onSubmit }) {
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImagePick = async () =>{
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  const handleSubmit = () => {
    if (!placeName || !description || !image) {
      Alert.alert('Error', 'Please, fill all fields.');
      return;
    }

    onSubmit({ placeName, description, image });

    setPlaceName('');
    setDescription('');
    setImage(null);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Place name"
        value={placeName}
        onChangeText={setPlaceName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <View style={styles.imageContainer}>
        {image && <Image source={{uri: image}} style={styles.image}/>}
        <Button title='Select Image' onPress={handleImagePick}/>
      </View>

      <Button title="Register Place" onPress={handleSubmit} />

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  imageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
});