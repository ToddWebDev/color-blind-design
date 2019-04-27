import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class ColorTray extends Component {
  render() {
    const { colorOne, colorTwo } = this.props;
    return (
      <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center' }}>
        <Icon name='lens' size={40} iconStyle={{ color: colorOne }} />
        <Icon name='lens' size={40} iconStyle={{ color: colorTwo }} />
      </View>
    );
  }
}

ColorTray.propTypes = {
  colorOne: PropTypes.string,
  colorTwo: PropTypes.string,
};

ColorTray.defaultProps = {
  colorOne: '#e5e5e5',
  colorTwo: '#e5e5e5',
};

export default ColorTray;
