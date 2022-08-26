import types from './types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {PostsService} from '../../Services';
import {createPostObject} from '../../Adapters/PostAdapter';

export const loadPosts = createAsyncThunk(types.LOAD_POSTS, async () => {
  try {
    console.log('loadPosts1');
    const posts = await PostsService.getPosts();
    if (posts) {
      // convert the posts to an array of objects
      const postsArray = Object.values(posts);
      return postsArray;
    } else {
      return [];
    }
  } catch (error) {
    console.log('ERROR ON actions.loadPosts', error);
    return error;
  }
});

export const addPost = createAsyncThunk(
  types.ADD_POST,
  async (content: string) => {
    try {
      const post = createPostObject(content);
      const newPost = await PostsService.addPost(post);
      return newPost;
    } catch (error) {
      console.log('ERROR ON actions.addPost', error);
      return error;
    }
  },
);
