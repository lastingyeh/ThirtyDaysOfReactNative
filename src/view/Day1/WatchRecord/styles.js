import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  recordList: {
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15
  },
  recordItem: {
    height: 40,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#bbb',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  recordItemTitle: {
    backgroundColor: 'transparent',
    flex: 1,
    textAlign: 'left',
    paddingLeft: 20,
    color: '#777'
  },
  recordItemTime: {
    backgroundColor: 'transparent',
    flex: 1,
    textAlign: 'right',
    paddingRight: 20,
    color: '#222'
  }
});

export default styles;
