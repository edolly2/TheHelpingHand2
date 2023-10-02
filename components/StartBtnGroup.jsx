import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

export default function StartBtnGroup() {
  return (
    <View style={styles.btnGroupContainer}>
      <Button text="Login" />
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnGroupContainer: {
    backgroundColor: 'pink',
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
  },
});
