import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  entrance: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor: '#1b95e0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  twitter: {
    color: '#fff',
    position: 'relative',
    top: -20,
    textAlign: 'center'
  }
});

export default styles;
