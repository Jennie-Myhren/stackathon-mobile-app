import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import {
  Avatar,
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
// import TestPage from './client/DataInputPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  // const [radiusMean, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Avatar
        small
        rounded
        source={{
          //Photo of Margaret Hamburg in public domain
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Margaret_Hamburg_official_portrait.jpg',
        }}
        activeOpacity={0.7}
      />
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      {/* </ScrollView> */}
    </View>
  );
}
