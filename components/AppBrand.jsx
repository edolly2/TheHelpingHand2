import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AppBrand() {
  return (
    <View style={styles.brandContainer}>
      <Image
        source={require('../assets/images/helping_hand_logo.png')}
        style={styles.brand}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  brandContainer: {
    // backgroundColor: 'green',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
  },

  brand: {
    maxWidth: '100%',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
