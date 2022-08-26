import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography} from '../../../Styles';
import {fontWeight} from '../../../Styles/Typography';

const HeadBar = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.ScreenName}>Moments</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  ScreenName: {
    ...fontWeight.bold,
    ...Typography.fontSize.x50,
  },
});

export default HeadBar;
