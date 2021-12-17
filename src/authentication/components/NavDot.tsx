import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';
import { theme } from '../../utils/theme';

interface NavDotProps {
  activeIndex: number;
  currentIndex: number;
}

const NavDot = ({
  activeIndex,
  currentIndex,
}: NavDotProps) => {

  const backgroundColor = activeIndex === currentIndex ? theme.pale_teal : theme.light_teal;

  return (
    <View style={[styles.dot, { backgroundColor }]} />
  );
};

export default NavDot;

const styles = StyleSheet.create({
  dot: {
    height: moderateScale(10),
    width: moderateScale(10),
    borderRadius: 99,
    marginHorizontal: moderateScale(3)
  }
});
