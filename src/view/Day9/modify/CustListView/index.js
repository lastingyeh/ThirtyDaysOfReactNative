import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SegmentControl from '../SegmentControl';

const { width, height } = Dimensions.get('window');

class CustListView extends Component {
  // Header-Style
  _renderHeader = () =>
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <SegmentControl
          selectedColors={{ backColor: '#0055ff', textColor: '#fff' }}
          fontStyle={{ fontSize: 12 }}
          contentStyle={{ width: 110, height: 20 }}
          options={['推文', '媒體', '喜歡']}
          onSelectionIndex={(index, opt) => {
            alert(opt);
          }}
        />
      </View>
      <View
        style={{
          height: 40,
          width,
          backgroundColor: '#8c8c8c',
          marginVertical: 10,
          justifyContent: 'flex-end'
        }}
      >
        <Text
          style={{
            fontWeight: '300',
            color: '#fff',
            paddingBottom: 5,
            paddingLeft: 5,
            fontSize: 16,
            fontWeight: '300'
          }}
        >
          推薦關注
        </Text>
      </View>
    </View>;

  // Row-Style
  _renderRow = item =>
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

  // Footer-Style
  _renderFooter = () => {
    // loading handle - unused
    // if (!this.state.loading)
    return (
      <TouchableOpacity onPress={this.props.getMoreData}>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ color: '#999999', fontSize: 14 }}>
            {this.props.hasMoreData ? '復原' : '更多建議'}
          </Text>
          <Icon
            name="ios-arrow-forward"
            size={20}
            style={{ marginRight: 10 }}
            color="#999999"
          />
        </View>
      </TouchableOpacity>
    );

    // return (
    //   <View
    //     style={{
    //       paddingVertical: 15,
    //       borderTopWidth: 1,
    //       borderColor: '#ced0ce'
    //     }}
    //   >
    //     <ActivityIndicator animating size="large" />
    //   </View>
    // );
  };

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.data);

    return (
      <ListView
        {...this.props}
        ref={this.props.custRef}
        dataSource={dataSource}
        renderFooter={this._renderFooter}
        renderHeader={this._renderHeader}
        renderRow={this._renderRow}
      />
    );
  }
}

export default CustListView;
