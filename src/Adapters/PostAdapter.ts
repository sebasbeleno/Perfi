import {PostType} from '../types';
import {Store} from '../Redux/Store';
import uuid from 'react-native-uuid';

export const createPostObject = (content: string): PostType => {
  const {user} = Store.getState().auth;
  if (user) {
    return {
      content: content,
      createdAt: Date.now(),
      likes: [],
      id: uuid.v4().toString(),
      user: {
        name: user.name,
        photoURL: user.photoURL,
        uid: user.uid,
      },
    };
  } else {
    throw new Error('User not found');
  }
};
