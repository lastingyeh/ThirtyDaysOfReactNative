import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

class WatchControl extends Component {
  static propTypes = {
    stopWatch: PropTypes.func.isRequired,
    clearRecord: PropTypes.func.isRequired,
    startWatch: PropTypes.func.isRequired,
    addRecord: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      watchOn: false,
      startBtnText: 'Start',
      startBtnColor: '#60B644',
      stopBtnText: 'Count',
      underlayColor: '#fff'
    };
  }

  // start counter
  _startWatch = () => {
    if (!this.state.watchOn) {
      this.props.startWatch();
      this.setState({
        startBtnText: 'Stop',
        startBtnColor: '#ff0044',
        stopBtnText: 'Count',
        underlayColor: '#eee',
        watchOn: true
      });
    } else {
      this.props.stopWatch();
      this.setState({
        startBtnText: 'Start',
        startBtnColor: '#60B644',
        stopBtnText: 'Reset',
        underlayColor: '#eee',
        watchOn: false
      });
    }
  };

  // add counter record
  _addRecord = () => {
    if (this.state.watchOn) {
      this.props.addRecord();
    } else {
      this.props.clearRecord();
      this.setState({
        stopBtnText: 'Count'
      });
    }
  };

  render() {
    return (
      <View style={styles.WatchControlContainer}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <TouchableHighlight
            style={styles.btn}
            underlayColor={this.state.underlayColor}
            onPress={this._addRecord}
          >
            <Text style={[styles.btnText, { color: '#555' }]}>
              {this.state.stopBtnText}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableHighlight
            style={styles.btn}
            underlayColor="#eee"
            onPress={this._startWatch}
          >
            <Text style={[styles.btnText, { color: this.state.startBtnColor }]}>
              {this.state.startBtnText}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default WatchControl;
