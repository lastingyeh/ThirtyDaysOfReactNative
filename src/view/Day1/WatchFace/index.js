import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const WatchFace = ({ sectionTime, totalTime }) => (
  <View style={styles.watchFaceContainer}>
    <Text style={styles.sectionTime}>{sectionTime}</Text>
    <Text style={styles.totalTime}>{totalTime}</Text>
  </View>
);

WatchFace.propTypes = {
  sectionTime: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired
};

WatchFace.defaultProps = {
  sectionTime: '',
  totalTime: ''
};

export default WatchFace;
