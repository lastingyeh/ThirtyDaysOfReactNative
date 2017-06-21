import React, { Component } from 'react';
import { Image, View } from 'react-native';
import MoveableCircle from './MoveableCircle';
import styles from './styles';

const Day7 = () =>
  <View style={styles.container}>
    <Image source={require('../../img/agrass.png')} style={styles.bg} />
    <View style={styles.circleContainer}>
      <MoveableCircle />
    </View>
  </View>;

export default Day7;
