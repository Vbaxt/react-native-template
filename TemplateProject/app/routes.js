import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Counter,
  Settings,
  Welcome,
} from './screens';
import { colors } from './styles';

const stackConfig = {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: colors.primary,
      },
      tintColor: colors.background,
    },
  },
};

const modalStackConfig = {
  ...stackConfig,
  mode: 'modal',
};

const tabConfig = {
  tabBarOptions: Platform.select({
    ios: {
      activeTintColor: colors.primary,
    },
    android: {
      activeTintColor: colors.background,
      style: {
        backgroundColor: colors.primary,
      },
    },
  }),
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
