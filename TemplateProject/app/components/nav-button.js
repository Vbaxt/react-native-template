import React from 'react';
import { Button } from 'react-native';
import { colors } from '../styles';

const NavButton = ({color = colors.navButtonTextColor, ...props}) =>
  <Button color={color} {...props} />;

export default NavButton;
