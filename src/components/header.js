// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Header component!</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  textStyle: {
    fontSize: 20
  }
}

// Make the component available to other parts of the app
export default Header;