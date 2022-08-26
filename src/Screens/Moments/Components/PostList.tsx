import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Typography} from '../../../Styles';
import {PostType} from '../../../types';
import PostCard from './PostCard';

const DEFAULT_AVATAR =
  'https://icon-library.com/images/yellow-discord-icon/yellow-discord-icon-6.jpg';
interface PostProps {
  posts: PostType[];
  onRefresh: () => void;
  isFetching: boolean;
}
const PostList = (props: PostProps) => {
  return (
    <FlatList
      style={Styles.container}
      data={props.posts}
      onRefresh={props.onRefresh}
      refreshing={props.isFetching}
      /* ListEmptyComponent={EmptyListMessage} */
      renderItem={({item}) => (
        <PostCard
          author={item.user.name || ''}
          content={item.content}
          createdAt={item.createdAt}
          authorId={''}
          id={item.id}
          avatar={item.user.photoURL || DEFAULT_AVATAR}
          key={item.id}
        />
      )}
    />
  );
};

const Styles = StyleSheet.create({
  container: {
    // TODO
    flex: 1,
  },
  title: {
    // TODO
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x30,
  },
  emptyText: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x20,
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PostList;
