import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Sizing, Typography} from '../../../Styles';
import {fontWeight} from '../../../Styles/Typography';
import NotificationsIcon from '../../../Icons/NotificationsIcon';

const HeadBar = (props: any) => {
  const onNotificationIconPressed = () => {
    props.navigation.navigate('Notifications');
  };

  const RenderNotificationsIcon = () => {
    return (
      <TouchableHighlight onPress={onNotificationIconPressed}>
        <NotificationsIcon />
      </TouchableHighlight>
    );
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.ScreenName}>Moments</Text>
      <RenderNotificationsIcon />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: Sizing.x10,
    justifyContent: 'space-between',
  },
  ScreenName: {
    ...fontWeight.bold,
    ...Typography.fontSize.x50,
  },
});

export default HeadBar;
