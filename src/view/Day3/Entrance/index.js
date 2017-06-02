import React, { Component, PropTypes } from 'react';
import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

// make animatedComponent
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component {
  // static propTypes = {
  //   hideThis: PropTypes.func.isRequired
  // };

  constructor() {
    super();

    this.state = {
      transformAnim: new Animated.Value(1),
      opacityAnim: new Animated.Value(1)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.transformAnim, {
      toValue: 50,
      duration: 1200,
      delay: 2000,
      easing: Easing.elastic(2)
    }).start();

    Animated.timing(this.state.opacityAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.elastic(1),
      delay: 2200
    }).start();

    // hide entrance
    // setTimeout(() => this.props.hideThis(), 3300);
    setTimeout(() => this._navigateTo('Day3View'), 3300);
  }

  // after 'Entrance screen' entring,then 'Day3View' replaced..
  _navigateTo = routeName => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  render() {
    return (
      <Animated.View
        style={[styles.entrance, { opacity: this.state.opacityAnim }]}
      >
        <AnimatedIcon
          size={60}
          style={[
            styles.twitter,
            { transform: [{ scale: this.state.transformAnim }] }
          ]}
          name="logo-twitter"
        />
      </Animated.View>
    );
  }
}

export default Entrance;
