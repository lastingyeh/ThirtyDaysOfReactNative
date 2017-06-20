import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  map: {
    width: Util.size.width,
    height: Util.size.height / 10 * 8
  },
  btn: {
    backgroundColor: '#00a803',
    width: Util.size.width - 80,
    height: 40,
    borderWidth: Util.pixel,
    borderColor: '#009302',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 10
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff'
  },
});

export default styles;
