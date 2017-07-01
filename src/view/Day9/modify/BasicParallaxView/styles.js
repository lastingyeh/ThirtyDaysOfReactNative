import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AVATAR_SIZE = 68;
const PARALLAX_HEADER_HEIGHT = 260;
const STICKY_HEADER_HEIGHT = 70;

export { width, height, PARALLAX_HEADER_HEIGHT, STICKY_HEADER_HEIGHT };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundView: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  backgroundImg: {
    width,
    height: 110
  },
  foregroundView: {
    position: 'absolute',
    width,
    top: 110
  },
  foregroundControlView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  foregroundIconView: {
    position: 'absolute',
    left: 10,
    top: 0,
    marginLeft: 20,
    marginTop: -20
  },
  foregroundIconImg: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderColor: '#f2f2f2',
    borderWidth: 5,
    borderRadius: 5
  },
  userControl: {
    position: 'absolute',
    right: 10,
    top: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
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
    justifyContent: 'center',
    marginRight: 10
  },
  controlBtn2: {
    borderColor: '#8999a5',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 5,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlBtonText: {
    color: '#8999a5',
    fontSize: 14
  },
  userInfo: {
    position: 'absolute',
    top: 60,
    left: 10,
    height: 60,
    paddingVertical: 10,
    paddingLeft: 18
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
  stickyHeaderImg: {
    height: STICKY_HEADER_HEIGHT,
    width,
    backgroundColor: 'transparent'
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 24,
    margin: 10,
    fontWeight: '500'
  }
  // fixedSection: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 50
  // },
  // fixedSectionText: {
  //   color: '#999',
  //   fontSize: 20
  // }
});

export default styles;
