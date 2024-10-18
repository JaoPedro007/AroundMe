import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Logo } from '../components/Logo/Logo';
import { PlaceForm } from '../components/PlaceForm/PlaceForm';
import { ItemList } from '../components/ItemList/ItemList';
import { loadPlaces, savePlaces } from '../../services/placesStorage';

export function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() =>{
    const fetchPlaces = async()=>{
      const storedPlaces = await loadPlaces();
      setPlaces(storedPlaces);
    }

    fetchPlaces();
  }, []);

  const handleAddPlace = async(newPlace) =>{
    const updatedPlaces = [...places, {id: places.length +1, ...newPlace}];
    setPlaces(updatedPlaces);
    await savePlaces(updatedPlaces);
  }

  return (
    <View style={styles.container}>
      <Logo/>

      <PlaceForm onSubmit={handleAddPlace} />

      {places.length > 0 ? (
        <ItemList data={places} onItemPress={(item) => alert(`Click in: ${item.placeName}`)} />
      ):(
        <Text style={styles.emptyText}>No places registered yet.</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  }
});
