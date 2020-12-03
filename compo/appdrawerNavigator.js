import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Drawer from '../compo/drawer';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {BottomTab} from '../compo/tab';

export const SideDrawer = createDrawerNavigator({
  Home:{screen:BottomTab},
},
  {
      contentComponent:Drawer
  }
  ,{
      initialRouteName:'Home'
  }
)
export default SideDrawer;