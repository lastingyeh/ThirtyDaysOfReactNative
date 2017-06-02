import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

import Swiper from 'react-native-swiper';

// routes
import { navigationDays } from '../../routes';

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle('default');
  }

  render() {
    const { navigation } = this.props;

    const boxs = Object.keys(navigationDays).map((day, index) => (
      <TouchableHighlight
        key={day}
        style={[
          styles.touchBox,
          index % 3 === 2 ? styles.touchBox2 : styles.touchBox1
        ]}
        underlayColor="#eee"
        onPress={() => navigation.navigate(day)}
      >
        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>Day{index + 1}</Text>
          {navigationDays[day].isFA
            ? <IconFA
                size={navigationDays[day].size}
                name={navigationDays[day].icon}
                style={[styles.boxIcon, { color: navigationDays[day].color }]}
              />
            : <Icon
                size={navigationDays[day].size}
                name={navigationDays[day].icon}
                style={[styles.boxIcon, { color: navigationDays[day].color }]}
              />}
        </View>
      </TouchableHighlight>
    ));

    return (
      <ScrollView style={styles.mainView} title={this.props.title}>
        <Swiper
          height={150}
          showsButtons={false}
          autoplay
          activeDot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                width: 8,
                height: 8,
                borderRadius: 4,
                margin: 3
              }}
            />
          }
        >
          <TouchableHighlight onPress={() => navigation.navigate('Day1')}>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../img/day1.png')}
              />
              <Text style={styles.slideText}>Day1: Timer</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Day2')}>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../img/day2.png')}
              />
              <Text style={styles.slideText}>Day2: Weather</Text>
            </View>
          </TouchableHighlight>
        </Swiper>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}

export default MainView;
