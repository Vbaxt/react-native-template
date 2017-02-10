import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Counter, Welcome } from './screens';
import { colors } from './styles';

const stackConfig = {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: colors.primaryColor,
      },
      tintColor: colors.backgroundColor,
    },
  },
};

const tabConfig = {
  tabBarOptions: {
    activeTintColor: colors.primaryColor,
  },
};

const WelcomeNavigator = StackNavigator({
  Welcome: {screen: Welcome},
}, stackConfig);

const CounterNavigator = StackNavigator({
  Counter: {screen: Counter},
}, stackConfig);

const AppNavigator = TabNavigator({
  Welcome: {screen: WelcomeNavigator},
  Counter: {screen: CounterNavigator},
}, tabConfig);

export {
  AppNavigator,
};
