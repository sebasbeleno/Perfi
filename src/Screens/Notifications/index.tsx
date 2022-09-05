import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Sizing, Typography} from '../../Styles';
import {fontWeight} from '../../Styles/Typography';
import {NotificationsService} from '../../Services';
import {Store} from '../../Redux/Store';
import {NotificationType} from '../../types';
import {NotificationList} from './Components';

const NotificationsScreen = (props: any) => {
  const [notifications, setNotifications] = useState<NotificationType[] | []>(
    [],
  );
  useEffect(() => {
    const uid = Store.getState().auth.user?.uid;

    const getNotifications = async () => {
      if (uid) {
        const noti = await NotificationsService.getNotifications(uid);
        if (noti) {
          setNotifications(noti);
        }
      } else {
        props.navigation.navigate('Login');
      }
    };
    getNotifications();
  }, [props.navigation]);

  return (
    <View style={styles.headerContiner}>
      <NotificationList notifications={notifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContiner: {
    padding: Sizing.x20,
  },
  ScreenName: {
    ...fontWeight.bold,
    ...Typography.fontSize.x50,
  },
});

export default NotificationsScreen;
