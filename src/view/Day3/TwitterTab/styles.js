import { StyleSheet } from 'react-native';
import Util from '../../../utils';

const styles = StyleSheet.create({
  navAndroid: {
    backgroundColor: '#3195d7',
    width: Util.size.width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10
  },
  logoConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60
  },
  container:{
    width:Util.size.width,
    height:Util.size.height,
  },
  
});

export default styles;
