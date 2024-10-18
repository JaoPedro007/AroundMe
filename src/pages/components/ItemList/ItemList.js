import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

export function ItemList({ data, onItemPress }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onItemPress(item)} style={styles.item}>
      {item.image && (
        <Image source={{uri: item.image}} style={styles.image}/>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.placeName}>{item.placeName}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'top',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#3f73f5',
    borderRadius: 5
  },
  image: {
    width: 100, 
    height: 100,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 5
  },
  placeName: {
    fontSize: 18,
    color: '#ECF0F1',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#BDC3C7'
  },
});
