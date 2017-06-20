import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Platform,
  PermissionsAndroid,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import MapView, { MAP_TYPES } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import GeoCoder from 'react-native-geocoder';
import styles from './styles';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// geolocation options
const GEOLOCATION_OPTS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

const mapMarkers = [];

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: []
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(granted => {
        if (granted) {
          this.watchLocation();
        }
      });
    } else {
      this.watchLocation();
    }
  }

  componentWillUnmount() {
    if (this.watchID) {
      navigator.geolocation.clearWatch(this.watchID);
    }
  }

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        console.log(pos);
      },
      null,
      GEOLOCATION_OPTS
    );
  };

  watchLocation = () => {
    this.watchID = navigator.geolocation.watchPosition(
      pos => {
        if (pos.coords) {
          const { latitude, longitude } = pos.coords;

          const latitudeDelta = 0.0922;
          const longitudeDelta = latitudeDelta * ASPECT_RATIO;
        }
      },
      null,
      GEOLOCATION_OPTS
    );
  };

  gotoLocation = async () => {
    await GeoCoder.geocodeAddress('台北101')
      .then(res => {
        console.log(res);

        const { lat, lng } = res[0].position;

        mapMarkers.push({
          latitude: lat,
          longitude: lng,
          formattedAddress: res[0].formattedAddress
        });

        this.setState({
          region: {
            latitude: lat,
            longitude: lng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          markers: mapMarkers
        });

        this.map.animateToRegion(this.state.region, 2000);
      })
      .catch(err => console.log(err));
  };

  onMapPress = async e => {
    try {
      console.log('onMapPress');

      const { latitude, longitude } = e.nativeEvent.coordinate;

      let res = await GeoCoder.geocodePosition({
        lat: latitude,
        lng: longitude
      });

      if (res && res[0]) {
        const { position, formattedAddress } = res[0];

        mapMarkers.push({
          latitude,
          longitude,
          formattedAddress
        });
      }
    } catch (e) {
      console.log(e);
    }

    this.setState({ markers: mapMarkers });
  };

  onMarkerPress = e => {
    e.stopPropagation();
  };

  // render component
  render() {
    console.log('render', this.state.markers);
    const { latitude, longitude } = this.state.region;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => (this.map = ref)}
          style={styles.map}
          mapType="standard"
          initialRegion={this.state.region}
          loadingEnabled
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map((marker, index) =>
            <MapView.Marker
              key={index}
              coordinate={marker}
              onPress={e => this.onMarkerPress(e)}
            >
              <MapView.Callout>
                <ScrollView horizontal>
                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Icon
                      size={26}
                      name="ios-flag"
                      style={{ color: 'green' }}
                    />
                    <Text style={{ marginHorizontal: 10 }}>
                      {marker.formattedAddress}
                    </Text>
                  </View>

                </ScrollView>

              </MapView.Callout>
            </MapView.Marker>
          )}
        </MapView>
        <TouchableHighlight
          underlayColor="#00bd03"
          style={styles.btn}
          onPress={() => this.gotoLocation()}
        >
          <Text style={styles.btnText}>
            <Icon size={18} name="md-navigate" />
            Go To Taipei City
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Map.propTypes = {
  provider: MapView.ProviderPropType
};

export default Map;
