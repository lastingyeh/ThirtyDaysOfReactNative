import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Weather from './Weather';

const Day2 = ({ navigation }) => {
  const _back = () => {
    navigation.goBack(null);
  };

  return (
    <View>
      <Weather back={_back} />
    </View>
  );
};

export default Day2;
