import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {MessageType, userType} from '../types';
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

  async fetchMessages(): Promise<{[key: string]: MessageType[]}> {
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
    /* 
    const messagesObject = messagesArray.reduce((acc, message) => {
      if (!acc[message.user_id]) {
        acc[message.user_id] = [];
      }
      acc[message.user_id].push(message);
      return acc;
    }, {} as {[key: string]: MessageType[]});

    return messagesObject; */

    console.log('messagesArray', messagesArray);
    return messagesArray;
  }
}

export default new MessagesService();
