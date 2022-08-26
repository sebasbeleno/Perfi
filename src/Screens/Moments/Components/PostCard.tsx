import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Sizing, Typography} from '../../../Styles';

interface PostCardProps {
  author: string;
  createdAt: number;
  authorId: string;
  id: string;
  likes: number;
  content: string;
  avatar: string;
}

const CardHader = ({author, createdAt, avatar}: any) => {
  return (
    <View style={Styles.CardHader}>
      <Image source={{uri: avatar}} style={Styles.avatar} />
      <View style={{marginLeft: Sizing.x5}}>
        <Text style={Styles.author}>{author}</Text>
        <Text style={Styles.timeAgo}>{createdAt}</Text>
      </View>
    </View>
  );
};

const CardContent = ({content}: any) => {
  return (
    <View style={Styles.CardContent}>
      <Text style={Styles.content}>{content}</Text>
    </View>
  );
};

const CardFooter = ({likes}: any) => {
  return (
    <View style={Styles.CardFooter}>
      <Text style={Styles.likes}>{likes} likes</Text>
    </View>
  );
};

const PostCard = ({
  author,
  content,
  avatar,
  createdAt,
  likes,
  id,
}: PostCardProps) => {
  return (
    <View style={Styles.container} key={id}>
      <CardHader author={author} createdAt={createdAt} avatar={avatar} />
      <CardContent content={content} />
      <CardFooter likes={likes} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    marginVertical: Sizing.x10,
    padding: Sizing.x20,
  },
  CardHader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  author: {
    ...Typography.fontWeight.bold,
    ...Typography.fontSize.x20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  timeAgo: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x10,
    color: Colors.neutral.s400,
  },
  CardContent: {
    marginTop: Sizing.x10,
  },
  content: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x20,
  },
  CardFooter: {
    marginTop: Sizing.x10,
  },
  likes: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x20,
    color: Colors.primary.s400,
  },
});

export default PostCard;
