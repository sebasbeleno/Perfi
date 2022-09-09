import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {userType} from '../types';
import UserService from './UserService';

class MessagesService {
  private messagesRef = firestore().collection('messages');

  // get contact list from the database
  public async getContactList() {
    const users = await UserService.getUsers();

    // convert the users object to an array
    const usersArray = Object.values(users) as userType[];
    return usersArray;
  }

  async fetchMessages() {
    const messages = await this.messagesRef
      .orderBy('created_at', 'desc')
      .limit(10)
      .get();

    return this.adapter(messages);
  }

  async createMessage(message: string, uid: string) {
    await this.messagesRef.doc().set({
      message,
      user_id: uid,
      created_at: firestore.FieldValue.serverTimestamp(),
    });
  }

  adapter(
    messages: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) {
    // return a object with the messages and the user_id as key
    const messagesArray = messages.docs.map(doc => {
      const message = doc.data();
      message.id = doc.id;
      message.created_at = new Date(message.created_at.seconds * 1000);
      return message;
    });
    return messagesArray;
  }
}

export default new MessagesService();
