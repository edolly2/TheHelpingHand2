import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBrand from '../components/AppBrand';
import StartBtnGroup from '../components/StartBtnGroup';

export default function StartPage() {
  return (
    <View>
      <AppBrand />
      <StartBtnGroup />
    </View>
  );
}

const styles = StyleSheet.create({});
