import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxEstilo = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.title}>React Native</Text>
    </View>
  )
};

export default BoxEstilo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderColor: '#20232a',
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
