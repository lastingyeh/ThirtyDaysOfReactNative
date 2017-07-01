import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const BORDER_RADIUS = 6.5;

class SegmentControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
  }

  _onHandlePress = (index, opt) => {
    this.props.onSelectionIndex(index, opt);

    this.setState({ selectedIndex: index });
  };

  _renderItem = (index, opt, styles) =>
    <View
      key={index}
      style={[
        { ...this.props.contentStyle },
        {
          backgroundColor:
            this.state.selectedIndex === index
              ? this.props.selectedColors.backColor
              : this.props.selectedColors.textColor,
          borderColor: this.props.selectedColors.backColor,
          borderWidth: 1,
          justifyContent: 'center',
          borderLeftWidth: 0,
          ...styles
        }
      ]}
    >
      <Text
        style={[
          {
            textAlign: 'center',
            color:
              this.state.selectedIndex === index
                ? this.props.selectedColors.textColor
                : this.props.selectedColors.backColor
          },
          { ...this.props.fontStyle }
        ]}
        onPress={() => this._onHandlePress(index, opt)}
      >
        {opt}
      </Text>
    </View>;

  _renderSegment = (length = 1) => {
    const borderRadius = this.props.fontStyle.fontSize / 2;

    let firstBorderStyle = {};
    let lastBorderStyle = {};

    if (length >= 2) {
      firstBorderStyle = {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderLeftWidth: 1
      };

      lastBorderStyle = {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      };
    }

    const segmentView = this.props.options.map((opt, index) => {
      if (index === 0) {
        return this._renderItem(index, opt, firstBorderStyle);
      } else if (index === this.props.options.length - 1) {
        return this._renderItem(index, opt, lastBorderStyle);
      } else {
        return this._renderItem(index, opt);
      }
    });

    return (
      <View style={{ flexDirection: 'row' }}>
        {segmentView}
      </View>
    );
  };

  render() {
    return this._renderSegment(this.props.options.length);
  }
}

SegmentControl.propTypes = {
  selectedColors: PropTypes.shape({
    backColor: PropTypes.string,
    textColor: PropTypes.string
  }),
  fontStyle: PropTypes.object,
  onSelectionIndex: PropTypes.func,
  selectedValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

SegmentControl.defaultProps = {
  selectedColors: { backColor: '#66b3ff', textColor: '#fff' },
  fontStyle: { fontSize: 12 }
};

export default SegmentControl;
