import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  WatchControlContainer: {
    width: Util.size.width,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#f3f3f3',
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 0
  },
  btn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 14,
    backgroundColor: 'transparent'
  }
});

export default styles;
