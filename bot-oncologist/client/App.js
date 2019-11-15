import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataInputPage from './DataInputPage';
import trainedBrain from '../brain/neuralNet';

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
      <Text>How often does this update?</Text>
      <DataInputPage />
    </View>
  );
}
