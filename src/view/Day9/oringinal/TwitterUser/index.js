import React, { Component } from 'react';
import {
  Image,
  PanResponder,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// for android can use
import { SegmentedControls } from 'react-native-radio-buttons';

import TwitterList from '../TwitterFlatList';
import TwitterListView from '../TwitterListView';
import styles from './styles';

const bannerUrl = require('../../../../img/githubLogo.png');
const iconUrl =
  'https://screenshots.en.sftcdn.net/en/scrn/3344000/3344319/image-03-535x535.png';

class TwitterUser extends Component {
  _scrollEnabled = false;
  _previousTop = 0;
  _iconTop = 95;
  _scale = 1;
  _bannerTop = 0;
  _opacity = 0;
  _minTop = -192;
  _userStyle = {};

  user = (null: ?{ setNativeProps(props: Object): void });

  constructor(props) {
    super(props);

    this.state = {
      scale: 1,
      iconTop: 95,
      bannerTop: 0,
      opacity: 0,
      selectedOption: '推文',
      listHeight: 0
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        
        return gestureState.dx != 0 && gestureState.dy != 0;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        // console.log('onPanResponderGrant', evt.nativeEvent, gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log('onPanResponderMove', evt.nativeEvent, gestureState);

        this._userStyle.style.top = this._previousTop + gestureState.dy;
        this._scale = 1 + this._userStyle.style.top / 162.5;
        this._iconTop = 95 - this._userStyle.style.top / 4.16;
        this._bannerTop = 0;
        this._opacity = 0;

        if (this._userStyle.style.top < -62.5) {
          this._scale = 0.6;
          this._iconTop = 110;
          this._bannerTop = -this._userStyle.style.top - 62.5;
          this._opacity = Math.pow(
            (-this._userStyle.style.top - 62.5) / 129.5,
            0.5
          );
        }

        if (this._userStyle.style.top > 0) {
          this._userStyle.style.top = 0;
          this._scale = 1;
          this._iconTop = 95;
        }

        if (this._userStyle.style.top < this._minTop) {
          this._userStyle.style.top = this._minTop;
          this._opacity = 1;
          this._bannerTop = 129.5;
        }

        this.setState({
          scale: this._scale,
          iconTop: this._iconTop,
          bannerTop: this._bannerTop,
          opacity: this._opacity,
          listHeight: this._bannerTop + 500
        });

        console.log('listHeight', this.state.listHeight);

        this._updatePosition();
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) =>
        this._endMove(evt, gestureState),
      onPanResponderTerminate: (evt, gestureState) =>
        this._endMove(evt, gestureState),
      onShouldBlockNativeResponder: (evt, gestureState) => true
    });

    this._userStyle = {
      style: {
        top: this._previousTop
      }
    };
  }

  componentDidMount() {
    this._updatePosition();
  }

  _updatePosition = () => {
    this.user && this.user.setNativeProps(this._userStyle);
  };

  _endMove = (evt, gestureState) => {
    this._previousTop = this._userStyle.style.top;
  };

  onSelectOption = selected => {
    console.log('onSelectOption', selected);
    this.setState({
      selectedOption: selected
    });
  };

  render() {
    const panProps = this.state.scrollEnabled
      ? {}
      : { ...this._panResponder.panHandlers };

    return (
      <View
        ref={user => (this.user = user)}
        style={styles.userContainer}
        {...this._panResponder.panHandlers}
      >
        <View style={styles.userPanel}>

          <Image
            style={[styles.banner, { top: this.state.bannerTop }]}
            source={bannerUrl}
            resizeMode="cover"
          />

          <View
            style={[
              styles.iconContainer,
              {
                top: this.state.iconTop,
                transform: [{ scale: this.state.scale }]
              }
            ]}
          >
            <Image
              style={styles.icon}
              source={{ uri: iconUrl }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.userControl}>
            <TouchableHighlight style={styles.controlIcon}>
              <Icon name="ios-settings" color="#8999a5" size={20} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.controlBtn}>
              <Icon name="ios-people" color="#8999a5" size={20} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.controlBtn2}>
              <Text style={styles.controlBtonText}>編輯個人資料</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userInfoName}>Github</Text>
            <Text style={styles.userInfoAccount}>@Github</Text>
            <View style={styles.userInfoFollow}>
              <Text style={styles.userInfoFollowing}>
                <Text style={styles.fontEm}>183</Text> 正在關注
              </Text>
              <Text style={styles.userInfoFollower}>
                <Text style={styles.fontEm}>830k</Text> 關注數
              </Text>
            </View>
          </View>

          {this.state.bannerTop <= 0
            ? <View />
            : <Image
                style={[styles.banner, { top: this.state.bannerTop }]}
                source={bannerUrl}
              />}
          {this.state.bannerTop <= 0
            ? <View />
            : <Image
                style={[
                  styles.banner,
                  { top: this.state.bannerTop, opacity: this.state.opacity }
                ]}
                source={require('../../../../img/w3.png')}
                resizeMode="cover"
              />}
          <Text
            style={[
              styles.bannerTitle,
              { top: this.state.bannerTop + 90, opacity: this.state.opacity }
            ]}
          >
            Github
          </Text>

          <View style={styles.segment}>
            <SegmentedControls
              options={['推文', '媒體', '喜歡']}
              onSelection={selected => this.onSelectOption(selected)}
              selectedOption={this.state.selectedOption}
            />
          </View>
        </View>
        <View style={styles.detailScroll}>
          <TwitterListView />
        </View>

      </View>
    );
  }
}

export default TwitterUser;
