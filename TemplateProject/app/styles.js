import React from 'react';
import { StyleSheet } from 'react-native';

const colors = {
  primaryColor: '#ed3e44',
  secondaryColor: '#29292c',
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  text: {
    color: colors.secondaryColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
  },
});

export { colors };
export default styles;
