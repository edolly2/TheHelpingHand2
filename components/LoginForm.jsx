import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Button from './Button';
import CheckBox from '@react-native-community/checkbox';

export default function LoginForm() {
  return (
    <View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.formInput} placeholder="Email/Username" />
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox />
          <Text>Remember this device?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: 'brown',
    gap: 16,
  },

  formInput: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
    width: '75%',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 24,
  },
});
