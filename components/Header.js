import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Header() {
  const nav=useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
      <Button title="Button" onPress={
        () => {
          nav.navigate('Citas');
        }
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: '#333',
    fontSize: 28,
  },
});


export default Header;