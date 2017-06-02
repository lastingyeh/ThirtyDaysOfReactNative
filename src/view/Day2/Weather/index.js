import React, { Component, PropTypes } from 'react';
import {
  Platform,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import styles from './styles';

// data
import weatherData from '../data/weatherData';

class Weather extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired
  };

  _back = () => {
    this.props.back();
  };

  render() {
    const slides = weatherData.map((wData, wIndex) => {
      // 1. create hourView
      const hourView = wData.hours.map((hData, hIndex) => (
        <View key={hData.key} style={styles.withinDayHoursBox}>
          <Text
            style={
              hIndex === 0
                ? styles.withinDayHoursTimeBold
                : styles.withinDayHoursTime
            }
          >
            {hData.time}
          </Text>
          <Icon
            name={hData.icon}
            size={25}
            style={[styles.withinDayHoursIcon, { color: hData.color }]}
          />
        </View>
      ));

      // 2. create dayView
      const dayView = wData.days.map((dData, dIndex) => (
        <View key={dData.key} style={styles.withinWeekLine}>
          <View style={styles.withinWeekDay}>
            <Text style={styles.withinWeekDayText}>{dData.day}</Text>
          </View>
          <View style={styles.withinWeekIcon}>
            <Icon
              name={dData.icon}
              style={styles.withinWeekIconIcon}
              size={25}
            />
          </View>
          <View style={styles.withinWeekDegree}>
            <Text style={styles.withinWeekHigh}>
              {dData.high}
            </Text>
            <Text
              style={
                wData.night ? styles.withinWeekLowNight : styles.withinWeekLow
              }
            >
              {dData.low}
            </Text>
          </View>
        </View>
      ));

      // merge and return View
      return (
        <View key={wData.key}>
          <Image source={wData.bg} />
          <ScrollView
            style={styles.pageContainer}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.headerInfo}>
              <Text style={styles.city}>{wData.city}</Text>
              <Text style={styles.abs}>{wData.abs}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.degree}>{wData.degree}</Text>
                <Text style={styles.circle}>°</Text>
              </View>
            </View>

            <View>
              <View style={styles.withinDayGeneral}>

                <View style={styles.withinDayHead}>
                  <Text style={styles.withinDayWeek}>{wData.today.week}</Text>
                  <Text style={styles.withinDayDay}>{wData.today.day}</Text>
                </View>

                <View style={styles.withinDayTail}>
                  <Text style={styles.withinDayHigh}>{wData.today.high}</Text>
                  <Text
                    style={
                      wData.night
                        ? styles.withinDayLowNight
                        : styles.withinDayLow
                    }
                  >
                    {wData.today.low}
                  </Text>
                </View>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.withinDayHoursContainer}
              >
                <View style={styles.withinDayHours}>
                  {hourView}
                </View>
              </ScrollView>

              <View style={styles.withinWeek}>
                {dayView}
              </View>

              <View style={styles.weatherInfo}>
                <Text style={styles.weatherInfoText}>{wData.info}</Text>
              </View>

              <View style={styles.weatherOther}>
                <View style={styles.weatherOtherSection}>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>日出：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.rise}</Text>
                  </View>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>日落：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.down}</Text>
                  </View>
                </View>
                <View style={styles.weatherOtherSection}>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>降雨概率：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.prop}</Text>
                  </View>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>湿度：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.humi}</Text>
                  </View>
                </View>
                <View style={styles.weatherOtherSection}>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>风速：</Text>
                    <Text style={styles.weatherOtherValue}>
                      <Text style={{ fontSize: 10 }}>{wData.dir}</Text>
                      {wData.speed}
                    </Text>
                  </View>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>体感温度：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.feel}</Text>
                  </View>
                </View>
                <View style={styles.weatherOtherSection}>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>降水量：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.rain}</Text>
                  </View>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>气压：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.pres}</Text>
                  </View>
                </View>
                <View style={styles.weatherOtherSection}>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>能见度：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.sight}</Text>
                  </View>
                  <View style={styles.weatherOtherLine}>
                    <Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
                    <Text style={styles.weatherOtherValue}>{wData.uv}</Text>
                  </View>
                </View>
              </View>

            </View>

          </ScrollView>
        </View>
      );
    });

    // render Weather View
    return (
      <View>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          paginationStyle={styles.swiperPagination}
          dot={<View style={styles.swiperDot} />}
          activeDot={
            <View
              style={[
                styles.swiperDot,
                { backgroundColor: 'rgba(255,255,255,0.5)' }
              ]}
            />
          }
        >
          {slides}
        </Swiper>
        <TouchableHighlight onPress={this._back} style={styles.backBtn}>
          <Icon size={17} name="ios-list-outline" style={styles.backBtnIcon} />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Weather;
