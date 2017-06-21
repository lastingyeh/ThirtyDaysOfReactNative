import { StyleSheet, Platform } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  mapView: {
    width: Util.size.width,
    height: Util.size.height / 10 * 8,
    margin: 5
  },
  map: {
    width: Util.size.width * 0.99,
    height: Util.size.height / 10 * 8
  },
  btnView: {
    width: Util.size.width,
    height: Util.size.height / 10 * 2
  },
  btn: {
    backgroundColor: '#00a803',
    height: 40,
    borderWidth: Util.pixel,
    borderColor: '#009302',
    borderRadius: 4,
    justifyContent: 'center',
    margin: 10
    //alignItems: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff'
  }
});

export default styles;
