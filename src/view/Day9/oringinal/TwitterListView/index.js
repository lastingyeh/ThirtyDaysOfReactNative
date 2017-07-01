import React, { Component } from 'react';
import { View, Text, Image, ListView, RefreshControl } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-elements';

import Util from '../../../../utils';
import data from '../../data/users';

class TwitterListView extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      data: ds.cloneWithRows(data),
      loading: false,
      isRefreshing: false
    };
  }

  componentWillUnmount() {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }
  }

  onRefresh = () => {
    this.setState({
      isRefreshing: true
    });

    this.loadingTimer = setTimeout(
      () => this.setState({ isRefreshing: false }),
      2000
    );
  };

  renderItem = item =>
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <Image
        source={{ uri: item.thumbnail }}
        resizeMode="cover"
        style={{ width: 50, height: 50, marginRight: 5 }}
      />
      <View style={{ flex: 5 }}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, color: '#999999' }}>{item.subTitle}</Text>
        {item.recommended
          ? <Icon name="ios-send" color="#999999" size={12}> 推薦</Icon>
          : null}
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#1a75ff',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 35,
          margin: 10,
          borderRadius: 10,
          alignSelf: 'flex-start'
        }}
      >
        <Icon name="ios-person-add" color="#1a75ff" size={30} />
      </View>

    </View>;

  renderHeader = () =>
    <View
      style={{
        height: 40,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10
      }}
    >
      <Text style={{ fontWeight: '500', color: '#737373' }}>
        推薦關注
      </Text>
    </View>;

  renderFooter = () => {
    if (!this.state.loading)
      return (
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ color: '#999999', fontSize: 14 }}>更多建議</Text>
          <Icon
            name="ios-arrow-forward"
            size={20}
            style={{ marginRight: 10 }}
            color="#999999"
          />
        </View>
      );

    return (
      <View
        style={{
          paddingVertical: 15,
          borderTopWidth: 1,
          borderColor: '#ced0ce'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  onChangeVisibleRows = (visibleRows, changedRows) => {
    console.log(visibleRows, changedRows);
  };

  render() {
    const refreshControl = (
      <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this.onRefresh}
        // tintColor="#ff0000"
        title="Loading..."
        // titleColor="#00ff00"
        // colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#fff"
      />
    );

    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={this.state.data}
        renderRow={this.renderItem}
        renderFooter={this.renderFooter}
        renderHeader={this.renderHeader}
        stickyHeaderIndices={[0]}
        refreshControl={refreshControl}
        onChangeVisibleRows={this.onChangeVisibleRows}
      />
    );
  }
}
export default TwitterListView;
