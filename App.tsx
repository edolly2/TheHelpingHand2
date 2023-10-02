import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import HotlineComponent from './components/HotlineComponent';
import DashboardPage from './pages/DashboardPage';
import SidebarMenu from './components/SidebarMenu';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.app}>
        {/* <HotlineComponent /> */}
        <SidebarMenu />
        {/* <StartPage /> */}
        {/* <ActivityIndicator size={100} color="#c43c3c" /> */}
        {/* <LoginPage /> */}
        {/* <DashboardPage /> */}
      </View>
    </SafeAreaView>
  );
}

// COLORS
// #7FD858
// #4B7933

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'red',
    flex: 1,
  },

  app: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 20,
  },
});
