import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Button(props) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.btnTextContainer}>
          <Text style={styles.btnText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {},

  btn: {
    backgroundColor: 'green',
    // paddingVertical: 4,
    // paddingHorizontal: 20,
    width: 96,
    height: 32,
    borderRadius: 8,
  },

  btnTextContainer: {
    flex: 1,
    // alignContent: 'center',
    justifyContent: 'center',
  },

  btnText: {
    textAlign: 'center',
  },
});
