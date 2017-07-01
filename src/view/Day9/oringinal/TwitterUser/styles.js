import { StyleSheet } from 'react-native';
import Util from '../../../../utils';

const styles = StyleSheet.create({
  userContainer: {
    width: Util.size.width,
    height: Util.size.height,
    backgroundColor: '#fff'
    // position: 'absolute',
    // top: 0,
    // left: 0
  },
  userPanel: {
    flex: 1,
    height: 300
  },
  banner: {
    width: Util.size.width,
    height: 125,
    position: 'absolute',
    top: 0,
    left: 0
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    top: 95,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 5
  },
  icon: {
    width: 68,
    height: 68
  },
  userControl: {
    height: 55,
    width: 200,
    position: 'absolute',
    top: 125,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  controlIcon: {
    width: 30
  },
  controlBtn: {
    borderColor: '#8999a5',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 5,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlBtn2: {
    borderColor: '#8999a5',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 5,
    width: 120,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlBtonText: {
    color: '#8999a5',
    fontSize: 14
  },
  userInfo: {
    width: Util.size.width,
    height: 90,
    position: 'absolute',
    top: 165,
    left: 0,
    paddingVertical: 15,
    paddingLeft: 15
  },
  userInfoName: {
    color: '#292f33',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 5
  },
  userInfoAccount: {
    color: '#66757f',
    paddingBottom: 5
  },
  userInfoFollow: {
    flexDirection: 'row'
  },
  userInfoFollowing: {
    color: '#95a4ae',
    width: 110
  },
  userInfoFollower: {
    color: '#95a4ae',
    width: 110
  },
  fontEm: {
    color: '#292f33',
    fontWeight: '500'
  },
  bannerTitle: {
    position: 'absolute',
    left: Util.size.width / 2 - 30,
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  segment: {
    position: 'absolute',
    top: 262,
    left: 0,
    width: Util.size.width - 15,
    height: 20,
    paddingLeft: 15
  },
  detailScroll: {
    position:'absolute',
    top:300,
    left:0,
    backgroundColor: '#f5f8fa',
    width: Util.size.width,
    // height: Util.size.height,
    borderTopWidth: Util.pixel,
    borderTopColor: '#9eacb6'
  }
});

export default styles;
