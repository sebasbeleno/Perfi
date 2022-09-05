import database from '@react-native-firebase/database';
import {NotificationType} from '../types';
import {createNotificationObject} from '../Adapters/NotificationsAdapter';

class NotificationsService {
  private notificationsRef = database().ref('notifications');

  // Retrun the notifications from the database
  public async getNotifications(
    uid: string,
  ): Promise<NotificationType[] | null> {
    try {
      const snapshot = await this.notificationsRef.child(uid).once('value');

      if (snapshot.exists()) {
        const notifications = snapshot.val();

        // Convert the object to an array
        const notificationsArray = Object.keys(notifications).map(
          key => notifications[key],
        );

        // sort the array by the timestamp
        const sorted = notificationsArray.sort((a, b) => b.timeAgo - a.timeAgo);

        return sorted;
      } else {
        return null;
      }
    } catch (error) {
      console.log('ERROR ON NotificationsService.getNotifications', error);

      return null;
    }
  }

  // Add a new notification to the database
  public async createNotification(message: string, uid: string, data: any) {
    const notification = createNotificationObject(message, uid, data);

    return this.notificationsRef.child(notification.uid).push(notification);
  }
}

export default new NotificationsService();
