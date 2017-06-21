import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

// screens
import MainView from './components/MainView';

import { navigationDays } from './routes';

const ThirtyDaysOfReactNative = StackNavigator(
  {
    MainView: {
      screen: MainView,
      navigationOptions: {
        title: '30 Days for React Native'
      }
    },
    ...navigationDays
  },
  {
    onTransitionEnd: ({ scene }) => {
      const routeName = scene.route.routeName;

      if (routeName === 'MainView') {
        StatusBar.setBarStyle('default');
      } else {
        StatusBar.setBarStyle(navigationDays[routeName]['barStyle']);
      }
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default ThirtyDaysOfReactNative;
