import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationActions } from 'react-navigation';

import styles from './styles';

const Menu = props => {
  console.log(props);
  const { navigation } = props;

  const navigateTo = routeName => {
    navigation.navigate(routeName);
  };

  const goBack = routeName => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName })]
    });
    navigation.dispatch(actionToDispatch);
  };

  const imgUri = 'http://static.ettoday.net/images/818/818305.jpg';
  return (
    <View style={styles.sideMenuContainer}>

      <View style={styles.profile}>
        <Image source={require('../../../img/w2.png')} style={styles.map} />

        <Image
          source={{ uri: imgUri }}
          style={styles.bigImg}
          resizeMode="cover"
        />
        <Image
          source={require('../../../img/pusheen.gif')}
          resizeMode="cover"
          style={styles.smallImg}
        />

        <Text style={styles.proText}>Lasting Yeh</Text>
        <View style={styles.proMail}>
          <Text style={{ color: '#fff', alignItems: 'flex-start' }}>
            lastingYeh@gmail.com
          </Text>
          <Icon
            name="caret-down"
            size={15}
            style={{ color: '#fff', alignItems: 'flex-end', paddingLeft: 10 }}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>

        <TouchableHighlight
          underlayColor="#888"
          onPress={() => navigateTo('Day1')}
        >
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="map-marker" size={15} />
            <Text style={styles.btnText}>你的地點</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#888"
          onPress={() => navigateTo('Day2')}
        >
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="pencil-square" size={15} />
            <Text style={styles.btnText}>你的貢獻</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#888"
          onPress={() => navigateTo('Day3')}
        >
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="product-hunt" size={15} />
            <Text style={styles.btnText}>離線區域</Text>
          </View>
        </TouchableHighlight>

      </View>

      <View style={styles.btnContainer}>

        <TouchableHighlight
          underlayColor="#888"
          onPress={() => navigateTo('Day5')}
        >
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="road" size={15} />
            <Text style={styles.btnText}>實際路況</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#888" onPress={() => true}>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="bus" size={15} />
            <Text style={styles.btnText}>公車路線</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#888" onPress={() => true}>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="bicycle" size={15} />
            <Text style={styles.btnText}>自行車線</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#888" onPress={() => true}>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="photo" size={15} />
            <Text style={styles.btnText}>衛星圖像</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#888" onPress={() => true}>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="tree" size={15} />
            <Text style={styles.btnText}>地形</Text>
          </View>
        </TouchableHighlight>

      </View>

      <View style={styles.btnContainer}>

        <TouchableHighlight
          underlayColor="#888"
          onPress={() => goBack('MainView')}
        >
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name="home" size={15} />
            <Text style={styles.btnText}>回上一頁</Text>
          </View>
        </TouchableHighlight>

      </View>

    </View>
  );
};
export default Menu;
