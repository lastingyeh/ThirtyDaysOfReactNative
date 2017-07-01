import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-elements';
import Util from '../../../../utils';
import data from '../../data/users';

class TwitterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      loading: false
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ data, loading: false }), 2000);
  };

  // render separator
  renderSeparator = () =>
    <View
      style={{
        height: 1,
        width: Util.size.width,
        backgroundColor: '#ced0ce'
      }}
    />;

  // render Header
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
      <Text style={{ fontWeight: '500', color: '#737373' }}>推薦關注</Text>
    </View>;

  renderItem = ({ item }) =>
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <Image
        source={{ uri: item.thumbnail }}
        resizeMode="cover"
        style={{ width: 50, height: 50, marginRight: 5 }}
      />
      <View style={{ flex: 5 }}>
        <Text style={{ fontSize: 16 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 12, color: '#999999' }}>
          {item.subTitle}
        </Text>
        {item.recommended
          ? <Icon name="ios-send" color="#999999" size={12}>
              {' '}推薦
            </Icon>
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

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => this.refreshData());
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReachedThreshold={5}
        />
      </List>
    );
  }
}
export default TwitterList;
