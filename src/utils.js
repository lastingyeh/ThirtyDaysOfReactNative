import React from 'react';
import { PixelRatio, Dimensions } from 'react-native';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
};

export default Util;
