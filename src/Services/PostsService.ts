import database from '@react-native-firebase/database';
import {PostType} from '../types';
import NotificationsService from './NotificationsService';

class PostsService {
  private postsRef = database().ref('posts');

  // Retrun the posts from the database
  public async getPosts(): Promise<PostType[] | null> {
    try {
      const snapshot = await this.postsRef.once('value');

      if (snapshot.exists()) {
        const posts = snapshot.val();
        return posts;
      } else {
        return null;
      }
    } catch (error) {
      console.log('ERROR ON PostsService.getPosts', error);

      return null;
    }
  }

  // Add a new post to the database
  public async addPost(post: PostType) {
    const message = `New post from ${post.user.name}`;
    const data = {
      description: post.content,
      postId: post.id,
    };
    NotificationsService.createNotification(message, post.user.uid, data);
    return this.postsRef.push(post);
  }
}

export default new PostsService();
