import { StyleSheet, Platform } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: 10,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    backgroundColor: '#fff'
  },
  navLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  navMid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icons: {
    color: '#1b95e0',
    width: 30
  }
});

export default styles;
