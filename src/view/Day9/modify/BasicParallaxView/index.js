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

  // func renderScrollComponent (CustListView)
  _renderScrollComponent = () => {
    // event onScroll
    const _onScroll = e => {
      if (Platform.OS === 'android' && !this.state.hasMoreData) {
        if (e.nativeEvent.contentOffset.y >= scrollHeight) {
          this.listViewRef.scrollTo({ x: 0, y: scrollHeight, animated: true });
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

    // stretch-background
    const _renderBackground = () =>
      <View key="background" style={styles.backgroundView}>
        <Image
          style={styles.backgroundImg}
          source={banner}
          resizeMode="cover"
        />
      </View>;

    // stretch-foreground
    const _renderForeground = () =>
      <View style={styles.foregroundView}>
        <View style={styles.foregroundControlView}>
          <View
            ref={ref => (this.iconRef = ref)}
            style={styles.foregroundIconView}
          >
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

    // as scroll to limit,it show renderStickHeader
    const _renderStickyHeader = () =>
      <Image source={backImg} style={styles.stickyHeaderImg}>
        <View style={styles.stickySection}>
          <Text style={styles.stickySectionText}>GitHub</Text>
        </View>
      </Image>;

    // fixedHeader
    // const _renderFixedHeader = () =>
    //   <View key="fixed-header" style={styles.fixedSection}>
    //     <Text
    //       style={styles.fixedSectionText}
    //       onPress={() => this.listViewRef.scrollTo({ x: 0, y: scrollHeight })}
    //     />
    //   </View>;

    // render ParallaxScorllView
    return (
      <ParallaxScrollView
        backgroundColor="#fff"
        onScroll={_onScroll}
        headerBackgroundColor="#fff"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={5}
        renderBackground={_renderBackground}
        renderForeground={_renderForeground}
        renderStickyHeader={_renderStickyHeader}
        // renderFixedHeader={_renderFixedHeader}
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
      />
    );
  };

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
      <View style={styles.container}>
        <CustListView
          hasMoreData={this.state.hasMoreData}
          getMoreData={this._getMoreData}
          data={this.state.useData}
          renderScrollComponent={this._renderScrollComponent}
          custRef={ref => (this.parsView = ref)}
        />
        <FloatBackButton navigation={this.props.navigation} />
      </View>
    );
  }
}

export default BasicParallaxView;
