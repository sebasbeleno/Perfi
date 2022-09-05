import {NotificationType} from '../types';
import uuid from 'react-native-uuid';

export function createNotificationObject(
  message: string,
  uid: string,
  data: any,
): NotificationType {
  return {
    id: uuid.v4().toString(),
    message,
    created_at: new Date().getTime(),
    uid,
    data,
  };
}
