import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataInputPage from './client/DataInputPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <DataInputPage />
    </View>
  );
}
