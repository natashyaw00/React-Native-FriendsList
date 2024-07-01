import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const friends = [
  { id: '1', name: 'Miko The Rabbids', description: 'Cutest bunny in the world.' },
  { id: '2', name: 'Felonious Gru', description: 'Member of The Vicious 6.' },
  { id: '3', name: 'Michi', description: 'Miko s friends.' },
  { id: '4', name: 'Molly', description: 'Michi s soulmate.' },
];

const FriendsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 15,
  },
  button: {
    backgroundColor: '#A87676', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
  },
});

export default FriendsList;
