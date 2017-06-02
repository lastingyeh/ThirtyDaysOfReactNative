import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class FacebookTabBar extends Component {

  state = {
    tabIcons:[]
  }

  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array
  };

  componentDidMount() {
    setTimeout(() => this.props.goToPage(0), 0);

    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue = ({ value }) => {
    this.state.tabIcons.forEach((icon, index) => {
      const progress = value - index >= 0 && value - index <= 1 ? value - index : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress)
        }
      });
    });
  };

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor = progress => {
    const red = 49 + (159 - 49) * progress;
    const green = 149 + (159 - 149) * progress;
    const blue = 215 + (159 - 215) * progress;

    return `rgb(${red},${green},${blue})`;
  };

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setTimeout(() => this.props.goToPage(index), 0)}
            style={styles.tab}
          >
            <Icon
              name={tab}
              size={30}
              color={
                this.props.activeTab === index
                  ? 'rgb(49,149,215)'
                  : 'rgb(159,159,159)'
              }
              ref={icon => {
                this.state.tabIcons[index] = icon;
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default FacebookTabBar;
