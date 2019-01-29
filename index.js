// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => (
  <Text> teste</Text>
);

// render this component
AppRegistry.registerComponent('proj', () => App);