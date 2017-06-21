import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  sideMenuContainer: {
    height: Util.size.height,
    //width: Util.size.width * 0.7,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 2
    },
    backgroundColor: '#fff'
  },
  profile: {
    height: Util.size.height * 0.25,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#bbb'
  },
  bigImg: {
    position: 'absolute',
    left: 20,
    top: 20,
    // margin: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: Util.pixel,
    borderColor: '#fff'
  },
  smallImg: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: Util.pixel,
    borderColor: '#fff'
  },
  proText: {
    color: '#fff',
    fontSize: 12,
    position: 'absolute',
    left: 20,
    bottom: 40,
    backgroundColor: 'transparent',
    fontWeight: '300'
  },
  proMail: {
    flexDirection: 'row',
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'transparent'
  },
  map: {
    width: Util.size.width * 0.7,
    height: Util.size.height * 0.25,
    backgroundColor: 'transparent'
  },
  btnContainer: {
    paddingTop: 10,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#bbb'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff'
  },
  btnIcon: {
    flex: 1,
    textAlign: 'center',
    color: '#555'
  },
  btnText: {
    flex: 3,
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
    color: '#454545'
  }
});

export default styles;
