import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Counter, Welcome, Settings } from './screens';
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

const modalStackConfig = {
  ...stackConfig,
  mode: 'modal',
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

const AppTabNavigator = TabNavigator({
  Welcome: {screen: WelcomeNavigator},
  Counter: {screen: CounterNavigator},
}, tabConfig);


const AppNavigator = StackNavigator({
  App: {
    screen: AppTabNavigator,
    navigationOptions: {
      // The AppTabNavigator controls showing it's own header, and thus we
      // disable the one from this ModalAppNavigator
      header: { visible: false },
    },
  },
  Settings: { screen: Settings },
}, modalStackConfig);

export {
  AppNavigator,
};
