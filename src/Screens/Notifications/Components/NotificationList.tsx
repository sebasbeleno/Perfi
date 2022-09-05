import React from 'react';
import {FlatList} from 'react-native';
import {NotificationType} from '../../../types';
import NotificationCard from './NotificationsCard';

interface NotificationListProps {
  notifications: NotificationType[];
}

const NotificationList = (props: NotificationListProps) => {
  return (
    <FlatList
      data={props.notifications}
      renderItem={({item}) => {
        return <NotificationCard notification={item} />;
      }}
    />
  );
};

export default NotificationList;
