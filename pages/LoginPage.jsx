import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },

  titleContainer: {
    backgroundColor: 'pink',
    marginBottom: 36,
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    backgroundColor: 'green',
    textAlign: 'center',
  },
});
