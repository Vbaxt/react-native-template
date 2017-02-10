import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles';
import NavButton from '../components/nav-button';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    header: ({goBack}, defaultHeader) => ({
      ...defaultHeader,
      left: <NavButton title="Close" onPress={() => goBack()} />,
    }),
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
};
