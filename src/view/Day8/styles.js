import { StyleSheet } from 'react-native';
import Util from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    width: Util.size.width
  },
  drop:{
    height:Util.size.height,
    width:Util.size.width,
    position:'absolute',
    top:0,
    left:0,
    opacity:0,
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  sideMenu:{
    height:Util.size.height,
    width:Util.size.width*0.7+20,
    position:'absolute',
    top:0,
    backgroundColor:'transparent',
    left:Util.size.width*(-0.7)-10
  }
});

export default styles;
