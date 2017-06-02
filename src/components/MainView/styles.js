import { StyleSheet } from 'react-native';
import Util from '../../utils';

const styles = StyleSheet.create({
  touchBox: {
    width: Util.size.width / 3 - 0.3334,
    height: Util.size.width / 3,
    backgroundColor: '#fff'
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderLeftWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderLeftColor: '#ccc'
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderRightWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderRightColor: '#ccc'
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Util.size.width / 3,
    height: Util.size.width / 3
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: Util.size.width / 3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent'
  },
  boxIcon: {
    position: 'relative',
    top: -10
  },
  mainView: {
    marginTop: 0
  },
  image: {
    width: Util.size.width,
    flexGrow: 1,
    alignSelf: 'stretch'
  },
  slide: {
    flexGrow: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: Util.size.width,
    textAlign: 'center',
    fontSize: 12
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: '#ccc',
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc'
  }
});

export default styles;
