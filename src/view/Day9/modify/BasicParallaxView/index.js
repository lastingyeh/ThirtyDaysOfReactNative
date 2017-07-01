import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Platform
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';

// data
import data from '../../data/users';

// Components
import CustListView from '../CustListView';
import FloatBackButton from '../FloatBackButton';

// styles
import styles, { PARALLAX_HEADER_HEIGHT, STICKY_HEADER_HEIGHT } from './styles';

// imgs ref
const iconUrl =
  'https://screenshots.en.sftcdn.net/en/scrn/3344000/3344319/image-03-535x535.png';
const banner = require('../../../../img/githubLogo.png');
const backImg = require('../../../../img/w3.png');

const scrollHeight = PARALLAX_HEADER_HEIGHT - STICKY_HEADER_HEIGHT;

// Render View
class BasicParallaxView extends Component {
  _scale = 1;
  _userStyle = {};

  constructor(props) {
    super(props);

    this.state = {
      useData: [...data].slice(0, 3),
      hasMoreData: false,
      refreshing: false,
      selectedOption: '推文'
    };
  }

  componentDidMount() {
    this._userStyle = {
      style: { transform: [{ scale: this._scale }] }
    };
  }

  componentWillUnmount() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });

    this.loadingTimeout = setTimeout(
      () => this.setState({ refreshing: false }),
      3000
    );
  };

  _onScroll = e => {
    console.log(e.nativeEvent.contentOffset.y);

    if (Platform.OS === 'android' && !this.state.hasMoreData) {
      if (e.nativeEvent.contentOffset.y >= scrollHeight) {
        this.parsView.scrollTo({ x: 0, y: scrollHeight, animated: true });
      }
    }

    if (e.nativeEvent.contentOffset.y <= 0) {
      this._scale = 1;
    } else if (e.nativeEvent.contentOffset.y >= scrollHeight) {
      this._scale = 0;
    } else {
      this._scale = 1 - e.nativeEvent.contentOffset.y / scrollHeight;
    }

    this._userStyle = {
      style: { transform: [{ scale: this._scale }] }
    };

    this.iconRef && this.iconRef.setNativeProps(this._userStyle);
  };

  _renderBackground = () =>
    <View key="background" style={styles.backgroundView}>
      <Image style={styles.backgroundImg} source={banner} resizeMode="cover" />
    </View>;

  _renderForeground = () =>
    <View style={styles.foregroundView}>
      <View ref={ref => (this.iconRef = ref)} style={styles.foregroundIconView}>
        <Image
          style={styles.foregroundIconImg}
          source={{ uri: iconUrl }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.userControl}>
        <TouchableOpacity
          style={styles.controlIcon}
          onPress={() => console.log('edit')}
        >
          <Icon name="ios-settings" color="#8999a5" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn}>
          <Icon name="ios-people" color="#8999a5" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn2}>
          <Text style={styles.controlBtonText}>編輯個人資料</Text>
        </TouchableOpacity>
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
    </View>;

  _renderStickyHeader = () =>
    <Image source={backImg} style={styles.stickyHeaderImg}>
      <View style={styles.stickySection}>
        <Text style={styles.stickySectionText}>Github</Text>
      </View>
    </Image>;

  _getMoreData = () => {
    if (!this.state.hasMoreData) {
      this.setState({ useData: data, hasMoreData: true });
      this.parsView &&
        this.parsView.scrollTo({ x: 0, y: scrollHeight, animated: true });
    } else {
      this.setState({ useData: [...data].slice(0, 3), hasMoreData: false });
      // this.listViewRef && this.listViewRef.scrollTo({ x: 0, y: 0 });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          style={{ overflow: 'hidden', flex: 1 }}
          onScroll={this._onScroll}
          backgroundColor="#fff"
          contentBackgroundColor="#fff"
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          backgroundSpeed={2}
          renderBackground={this._renderBackground}
          renderForeground={this._renderForeground}
          renderStickyHeader={this._renderStickyHeader}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              tintColor="#ff3300"
              title="loading"
              titleColor="#ff3300"
              colors={['#4d94ff', '#5500ff', '#002966']}
            />
          }
          ref={ref => (this.parsView = ref)}
          stickyHeaderIndices={[0]}
        >
          <CustListView
            hasMoreData={this.state.hasMoreData}
            getMoreData={this._getMoreData}
            data={this.state.useData}
          />
        </ParallaxScrollView>
        {Platform.OS === 'ios'
          ? <FloatBackButton navigation={this.props.navigation} />
          : null}
      </View>
    );
  }
}

export default BasicParallaxView;
