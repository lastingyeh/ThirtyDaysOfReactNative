import React from 'react';
import { View, Text, Platform } from 'react-native';

const Day6 = () => (
  <View
    style={[
      Platform.OS === 'ios' ? { marginTop: 20 } : { marginTop: 0 },
      { justifyContent: 'center', alignItems: 'center', flex: 1 }
    ]}
  >
    <Text style={{ fontSize: 40, textAlign: 'center' }}>To Be Updated</Text>
  </View>
);

export default Day6;