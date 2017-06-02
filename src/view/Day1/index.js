import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import WatchFace from './WatchFace';
import WatchControl from './WatchControl';
import WatchRecord from './WatchRecord';

class Day1 extends Component {
  constructor() {
    super();
    this.state = {
      stopWatch: false,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: '00:00.00',
      sectionTime: '00:00.00',
      recordCounter: 0,
      record: [
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' }
      ]
    };
  }

  componentWillUnmount() {
    this._stopWatch();
    this._clearRecord();
  }

  // time format
  fillTimeFormat = data => (data < 10 ? `0${data}` : data);

  // startWatch
  _startWatch = () => {
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation: 0,
        initialTime: new Date().getTime()
      });
    } else {
      this.setState({
        stopWatch: false,
        initialTime: new Date().getTime()
      });
    }

    let milSecond,
      second,
      minute,
      countingTime,
      secmilSecond,
      secsecond,
      secminute,
      seccountingTime;

    let interval = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime()
      });

      countingTime =
        this.state.timeAccumulation +
        this.state.currentTime -
        this.state.initialTime;

      // get mins
      minute = Math.floor(countingTime / (60 * 1000));
      // get secs
      second = Math.floor((countingTime - 6000 * minute) / 1000);
      // get milsecs as each 10 milSeconds update
      milSecond = Math.floor(countingTime % 1000 / 10);

      seccountingTime = countingTime - this.state.recordTime;

      secminute = Math.floor(seccountingTime / (60 * 1000));

      secsecond = Math.floor((seccountingTime - 60 * secminute) / 1000);

      secmilSecond = Math.floor(seccountingTime % 1000 / 100);

      this.setState({
        totalTime: `${this.fillTimeFormat(minute)}:${this.fillTimeFormat(second)}.${this.fillTimeFormat(milSecond)}`,
        sectionTime: `${this.fillTimeFormat(secminute)}:${this.fillTimeFormat(secsecond)}.${this.fillTimeFormat(secmilSecond)}`
      });

      if (this.state.stopWatch) {
        this.setState({
          timeAccumulation: countingTime
        });
        clearInterval(interval);
      }
    }, 100);
  };

  _stopWatch = () => {
    this.setState({
      stopWatch: true
    });
  };

  _addRecord = () => {
    let { recordCounter, record } = this.state;
    recordCounter++;

    if (recordCounter < 8) {
      record.pop();
    }
    record.unshift({
      title: `freq${recordCounter}`,
      time: this.state.sectionTime
    });

    this.setState({
      recordTime: this.state.timeAccumulation +
        this.state.currentTime -
        this.state.initialTime,
      recordCounter,
      record
    });
  };

  _clearRecord = () => {
    this.setState({
      stopWatch: false,
      resetWatch: true,
      intialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: '00:00.00',
      sectionTime: '00:00.00',
      recordCounter: 0,
      record: [
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' }
      ]
    });
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#f3f3f3'
        }}
      >
        <WatchFace
          totalTime={this.state.totalTime}
          sectionTime={this.state.sectionTime}
        />
        <WatchControl
          addRecord={this._addRecord}
          clearRecord={this._clearRecord}
          startWatch={this._startWatch}
          stopWatch={this._stopWatch}
        />
        <WatchRecord record={this.state.record} />
      </View>
    );
  }
}

export default Day1;
