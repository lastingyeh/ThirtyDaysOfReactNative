import React, { Component } from 'react';
import { TabBarIOS, View, Text, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import TwitterFlow from '../TwitterFlow';
import FacebookTabBar from '../FacebookTabBar';
import TwitterPost from '../TwitterPost';

import styles from './styles';

/*class TwitterTab extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: '首頁',
      title: '首頁'
    };
  }

  changeTab = tabName => {
    this.setState({
      selectedTab: tabName
    });
  };

  _updateTitle = obj => {
    const { i } = obj;

    let title = '';

    switch (i) {
      case 0:
        title = '首頁';
        break;
      case 1:
        title = '通知';
        break;
      case 2:
        title = '簡訊';
        break;
      case 3:
        title = '關於';
        break;
    }

    this.setState({
      title
    });
  };

  render() {
    const iosTabView = (
      <TabBarIOS barTintColor="#fff" tintColor="#1b95e0">
        <Icon.TabBarItem
          title="首頁"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={() => this.changeTab('首頁')}
          selected={this.state.selectedTab === '首頁'}
        >
          <TwitterFlow />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="通知"
          iconName="ios-notifications-outline"
          selectedIconName="ios-notifications"
          onPress={() => this.changeTab('通知')}
          selected={this.state.selectedTab === '通知'}
        >
          <TwitterFlow />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="簡訊"
          iconName="ios-mail-outline"
          selectedIconName="ios-mail"
          onPress={() => this.changeTab('簡訊')}
          selected={this.state.selectedTab === '簡訊'}
        >
          <TwitterFlow />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="關於"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          onPress={() => this.changeTab('關於')}
          selected={this.state.selectedTab === '關於'}
        >
          <TwitterFlow />
        </Icon.TabBarItem>
      </TabBarIOS>
    );

    const androidTabView = (
      <View>

        <View style={styles.navAndroid}>
          <View style={styles.logoContainer}>
            <Icon name="logo-twitter" color="#fff" size={27} />
            <Text style={styles.title}>{this.state.title}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="ios-search" color="#fff" size={25} />
            <Icon name="ios-create-outline" color="#fff" size={25} />
          </View>
        </View>
        <ScrollableTabView
          onChangeTab={obj => this._updateTitle(obj)}
          renderTabBar={() => <FacebookTabBar />}
        >
          <TwitterPost tabLabel="ios-home" />
          <TwitterPost tabLabel="ios-notifications" />
          <TwitterPost tabLabel="ios-mail" />
          <TwitterPost tabLabel="ios-person" />
        </ScrollableTabView>
      </View>
    );

    return Platform.OS === 'ios' ? iosTabView : tabNavigator;
  }
}*/

const TwitterScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TwitterFlow styles={{ height: 50 }} navigation={navigation} />
    <TwitterPost />
  </View>
);

const TwitterTab = TabNavigator(
  {
    Home: {
      screen: TwitterScreen,
      navigationOptions: {
        tabBarLabel: '首頁',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={35} color={tintColor} />
        )
      }
    },
    Notice: {
      screen: TwitterScreen,
      navigationOptions: {
        tabBarLabel: '通知',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications" size={35} color={tintColor} />
        )
      }
    },
    Message: {
      screen: TwitterScreen,
      navigationOptions: {
        tabBarLabel: '簡訊',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-mail" size={35} color={tintColor} />
        )
      }
    },
    About: {
      screen: TwitterScreen,
      navigationOptions: {
        tabBarLabel: '關於',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={35} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    backBehavior:'none'
  }
);

// backBehavior:'none' : prevent press back to  first tab,and back to upper StackNavigator

export default TwitterTab;
