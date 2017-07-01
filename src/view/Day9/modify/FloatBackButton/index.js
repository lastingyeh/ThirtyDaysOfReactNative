import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ICON_SIZE = 60;
const RIGHT = 20;
const BOTTOM = 20;
const MARGIN = Platform.OS === 'ios' ? 20 : 0;

const { width, height } = Dimensions.get('window');

class FloatBackButton extends Component {
  prevLetf = 0;
  prevTop = 0;
  minTop = -(height - ICON_SIZE - BOTTOM - MARGIN);
  minLeft = -(width - ICON_SIZE - RIGHT);

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        this.shouldPanResponder(gestureState),
      onPanResponderMove: (evt, gestureState) => {
        this.btnStyles.left = this.prevLetf + gestureState.dx;
        this.btnStyles.top = this.prevTop + gestureState.dy;

        console.log(
          'onPanResponderMove',
          height,
          width,
          this.btnStyles.left,
          this.btnStyles.top
        );

        if (this.btnStyles.top > 0) {
          this.btnStyles.top = 0;
        }

        if (this.btnStyles.top < this.minTop) {
          this.btnStyles.top = this.minTop;
        }

        if (this.btnStyles.left > 0) {
          this.btnStyles.left = 0;
        }

        if (this.btnStyles.left < this.minLeft) {
          this.btnStyles.left = this.minLeft;
        }

        this._updateStatus(this.btnStyles);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this._endMove(gestureState);
      }
    });

    this.btnStyles = {
      style: {
        left: this.prevLetf,
        top: this.prevTop
      }
    };
  }

  _endMove = ({ dx, dy }) => {
    this.prevLetf += dx;
    this.prevTop += dy;
  };

  _updateStatus = btnStyles => {
    this.btn && this.btn.setNativeProps(btnStyles);
  };

  shouldPanResponder = ({ x0, y0, moveX, moveY, dx, dy }) => {
    const draggedDown = dy > 30;
    const draggedUp = dy < -30;

    const draggedLeft = dx < -30;
    const draggedRight = dx > 30;

    return draggedDown || draggedUp || draggedLeft || draggedRight;
  };

  render() {
    return (
      <View
        style={{ position: 'absolute', right: RIGHT, bottom: BOTTOM }}
        {...this._panResponder.panHandlers}
      >
        <TouchableOpacity
          ref={ref => (this.btn = ref)}
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            backgroundColor: '#004f99',
            borderRadius: ICON_SIZE / 2,
            justifyContent: 'center'
          }}
          onPress={() => this.props.navigation.goBack(null)}
        >
          <Icon
            name="ios-home"
            size={26}
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#fff'
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

FloatBackButton.propTypes = {
  navigation: React.PropTypes.object.isRequired
};

export default FloatBackButton;
