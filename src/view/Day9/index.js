import React from 'react';
import { View, Text, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
// oringinal
import TwitterUser from './oringinal/TwitterUser';

// modify
import BasicParallaxView from './modify/BasicParallaxView';

const Day9 = TabNavigator(
  {
    Home: {
      screen: BasicParallaxView,
      navigationOptions: {
        tabBarLabel: '首頁',
        tabBarIcon: ({ tintColor, focused }) =>
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    },
    Notifications: {
      screen: () =>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Icon
            name="ios-chatboxes"
            size={45}
            style={{ marginRight: 10, color: '#86b300' }}
          />
          <Text style={{ fontSize: 40, color: '#86b300', fontWeight: '500' }}>
            Notifications
          </Text>
        </View>,
      navigationOptions: {
        tabBarLabel: '通知',
        tabBarIcon: ({ tintColor, focused }) =>
          <Icon
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    },
    Mail: {
      screen: () =>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Icon
            name="ios-mail"
            size={45}
            style={{ marginRight: 10, color: '#004de6' }}
          />
          <Text style={{ fontSize: 40, color: '#004de6', fontWeight: '500' }}>
            Mail
          </Text>
        </View>,
      navigationOptions: {
        tabBarLabel: '私訊',
        tabBarIcon: ({ tintColor, focused }) =>
          <Icon
            name={focused ? 'ios-mail' : 'ios-mail-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    },
    Me: {
      screen: () =>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Icon
            name="ios-person"
            size={45}
            style={{ marginRight: 10, color: '#ff9900' }}
          />
          <Text style={{ fontSize: 40, color: '#ff9900', fontWeight: '500' }}>
            Me
          </Text>
        </View>,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor, focused }) =>
          <Icon
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
      // showIcon: true,
      // showLabel: Platform.OS === 'ios' ? true : false
    }
    // tabBarPosition: 'bottom'
  }
);

export default Day9;
