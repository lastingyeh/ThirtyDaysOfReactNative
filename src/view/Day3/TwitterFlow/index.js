import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import TwitterPost from '../TwitterPost';

const TwitterFlow = ({ navigation }) => (
  <View>
    <View style={styles.nav}>
      <View style={styles.navLeft}>
        <Icon
          name="ios-person-add"
          size={23}
          style={{ color: '#1b95e0', paddingLeft: 10 }}
          onPress={() => navigation.goBack(null)}
        />
      </View>
      <View style={styles.navMid}>
        <Icon name="logo-twitter" size={27} style={{ color: '#1b95e0' }} />
      </View>
      <View style={styles.navRight}>
        <Icon name="ios-search" size={23} style={styles.icons} />
        <Icon name="ios-create-outline" size={23} style={styles.icons} />
      </View>
    </View>
    {<TwitterPost />}
  </View>
);

export default TwitterFlow;
