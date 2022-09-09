import {PostType} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {loadPosts, addPost} from './actions';

const initialState: {
  // TODO: Rename to content
  posts: PostType[] | [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
} = {
  posts: [],
  loading: 'idle',
};

type Action = {
  type: string;
  payload?: any;
};

export const PostsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPost: (state, action: Action) => {
      // TODO: Add the new post to the posts array
    },
  },
  extraReducers: builder => {
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = 'succeeded';
    });
    builder.addCase(addPost.rejected, (state, action) => {
      console.log('addPost.rejected', action.payload);
      state.loading = 'failed';
    });
    builder.addCase(addPost.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(loadPosts.rejected, (state, action) => {
      console.log('loadPosts.rejected', action.payload);
    });
  },
});

export default PostsSlice.reducer;
