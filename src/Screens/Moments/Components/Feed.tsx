import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Typography} from '../../../Styles';
import {PostType} from '../../../types';
import PostList from './PostList';

interface FeedProps {
  posts: PostType[];
  onRefresh: () => void;
  isFetching: boolean;
}

const Feed = (props: FeedProps) => {
  return (
    <View style={Styles.container}>
      <PostList
        posts={props.posts}
        onRefresh={props.onRefresh}
        isFetching={props.isFetching}
      />
    </View>
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
});

export default Feed;
