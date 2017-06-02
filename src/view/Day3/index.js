import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


// screens
import Entrance from './Entrance';
import TwitterTab from './TwitterTab';

const startNavigator = StackNavigator(
  {
    Entrance: {
      screen: Entrance
    },
    Day3View: {
      screen: TwitterTab
    }
  },
  {
    headerMode: 'none',
  }
);

export default startNavigator;

/*class Day3 extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
  }

  _hideEntrance = () => this.setState({ show: false });

  render() {
    let entrance = this.state.show
      ? <Entrance hideThis={this._hideEntrance} />
      : <View />;

    return (
      <View style={{ width: Util.size.width, height: Util.size.height }}>
        <androidTabNavigator />
        {entrance}
      </View>
    );
  }
}*/
