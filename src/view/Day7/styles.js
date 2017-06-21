import { StyleSheet } from 'react-native';
import Util from '../../utils';

const styles = StyleSheet.create({
  constainer: {
    height: Util.height,
    width: Util.width
  },
  bg: {
    width: Util.size.width,
    resizeMode: 'stretch',
    position: 'absolute'
  },
  circleContainer: {
    height: Util.height,
    width: Util.width
  }
});

export default styles;
