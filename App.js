import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './Screens/Login';
import BottomTab from './compo/tab';
import SideDrawer from './compo/appdrawerNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigatior = createSwitchNavigator({
  login:Login,
  Drawer:{screen:SideDrawer}
})
const AppContainer = createAppContainer(SwitchNavigatior);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
