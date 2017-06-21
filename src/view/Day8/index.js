import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  PanResponder,
  Text,
  Button
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import styles from './styles';
import Util from '../../utils';

import Menu from './Menu';
import Day1 from '../Day1';
import Day2 from '../Day2';
import Day3 from '../Day3';
import Day5 from '../Day5';

const Day8 = DrawerNavigator(
  {
    Day1: {
      screen: Day1,
      navigationOptions: {
        gestureEnabled: false
      }
    },
    Day2: {
      screen: Day2,
      navigationOptions: {
        gestureEnabled: false
      }
    },
    Day3: {
      screen: Day3,
      navigationOptions: {
        gestureEnabled: false
      }
    },
    Day5: {
      screen: Day5,
      navigationOptions: {
        gestureEnabled: false
      }
    }
  },
  {
    drawerWidth: Util.size.width * 0.7,
    contentComponent: props => <Menu {...props} />,
    contentOptions: {
      initialRouteName: 'Day1'
    }
  }
);

export default Day8;

// class Day8 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showDrop: false };
//   }

//   _previousLeft = -0.7 * Util.size.width - 10;
//   _previousOpacity = 0;
//   _minLeft = -0.7 * Util.size.width - 10;
//   _menuStyles = {};
//   _dropStyle = {};

//   _CustomLatyouLinear = LayoutAnimation.Presets.linear;

//   menu = (null: ?{ setNativeProps(props: Object): void });
//   drop = (null: ?{ setNativeProps(props: Object): void });

//   _updatePosition = () => {
//     this.menu && this.menu.setNativeProps(this._menuStyles);
//     this.drop && this.drop.setNativeProps(this._dropStyle);
//   };

//   _endMove = (evt, gestureState) => {
//     if (gestureState.vx < 0 || gestureState.dx < 0) {
//       this._menuStyles.style.left = this._minLeft;
//       this._dropStyle.style.opacity = 0;
//       this._previousLeft = this._minLeft;
//       this._previousOpacity = 0;
//       this.setState({
//         showDrop: false
//       });
//     }

//     if (gestureState.vx > 0 || gestureState.dx > 0) {
//       this._menuStyles.style.left = 0;
//       this._dropStyle.style.opacity = 1;
//       this._previousLeft = 0;
//       this._previousOpacity = 1;
//     }

//     this._updatePosition();
//     LayoutAnimation.configureNext(this._CustomLatyouLinear);
//   };

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponder: (evt, gestureState) =>
//         gestureState.dy / gestureState.dx != 0,
//       onPanResponderGrant: (evt, gestureState) => {
//         this.setState({ showDrop: true });
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         this._menuStyles.style.left = this._previousLeft + gestureState.dx;
//         this._dropStyle.style.opacity =
//           this._previousOpacity +
//           Math.pow(gestureState.dx / -this._minLeft, 0.5);

//         if (this._menuStyles.style.left > 0) {
//           this._menuStyles.style.left = 0;
//           this._dropStyle.style.opacity = 1;
//         }

//         if (this._menuStyles.style.left < this._minLeft) {
//           this._menuStyles.style.left = this._minLeft;
//           this._dropStyle.style.opacity = 0;
//         }

//         this._updatePosition();
//         LayoutAnimation.configureNext(this._CustomLatyouLinear);
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) =>
//         this._endMove(evt, gestureState),
//       onPanResponderTerminate: (evt, gestureState) =>
//         this._endMove(evt, gestureState),
//       onShouldBlockNativeResponder: (evt, gestureState) => true
//     });

//     this._menuStyles = {
//       style: {
//         left: this._previousLeft
//       }
//     };

//     this._dropStyle = {
//       style: {
//         opacity: this._previousOpacity
//       }
//     };
//   }

//   componentDidMount() {
//     this._updatePosition();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Map />
//         {this.state.showDrop
//           ? <View style={styles.drop} ref={drop => (this.drop = drop)} />
//           : null}
//         <View
//           {...this._panResponder.panHandlers}
//           style={styles.sideMenu}
//           ref={menu => (this.menu = menu)}
//         >
//           <Menu />
//         </View>
//       </View>
//     );
//   }
// }
