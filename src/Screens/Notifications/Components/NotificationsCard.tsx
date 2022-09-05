import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Outlines, Sizing, Typography} from '../../../Styles';
import {NotificationType} from '../../../types';
import moment from 'moment';

interface NotificationListProps {
  notification: NotificationType;
}

const NotificationCard = (props: NotificationListProps) => {
  const TimeAgo = moment(props.notification.created_at).fromNow();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.notificationText}>
          {props.notification.message}
        </Text>
        <Text style={styles.description}>
          {props.notification.data.description}
        </Text>
      </View>
      <View style={{marginVertical: Sizing.x10}}>
        <Text style={styles.timeAgo}>{TimeAgo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: Sizing.x10,
    backgroundColor: Colors.neutral.white,
    borderRadius: Outlines.borderRadius.base,
  },
  notificationText: {
    ...Typography.fontSize.x20,
    ...Typography.fontWeight.bold,
  },
  description: {
    ...Typography.fontSize.x20,
    color: Colors.neutral.s500,
  },
  timeAgo: {
    ...Typography.fontSize.x10,
    color: Colors.neutral.s500,
  },
});

export default NotificationCard;
