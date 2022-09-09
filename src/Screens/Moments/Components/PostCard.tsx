import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Sizing, Typography} from '../../../Styles';
import moment from 'moment';
import HeartIcon from '../../../Icons/HeartIcon';

interface PostCardProps {
  author: string;
  createdAt: number;
  authorId: string;
  id: string;
  content: string;
  avatar: string;
}

const CardHader = ({author, createdAt, avatar}: any) => {
  const TimeAgo = moment(createdAt).fromNow();

  return (
    <View style={Styles.CardHader}>
      <Image source={{uri: avatar}} style={Styles.avatar} />
      <View style={{marginLeft: Sizing.x5}}>
        <Text style={Styles.author}>{author}</Text>
        <Text style={Styles.timeAgo}>{TimeAgo}</Text>
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

const CardFooter = () => {
  return (
    <View style={Styles.CardFooter}>
      <HeartIcon size={Sizing.icons.x20} color={Colors.primary.brand} />
    </View>
  );
};

const PostCard = ({author, content, avatar, createdAt, id}: PostCardProps) => {
  return (
    <View style={Styles.container} key={id}>
      <CardHader author={author} createdAt={createdAt} avatar={avatar} />
      <CardContent content={content} />
      <CardFooter />
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
    flexDirection: 'row',
  },
  likes: {
    ...Typography.fontWeight.regular,
    ...Typography.fontSize.x20,
    color: Colors.primary.s400,
  },
});

export default PostCard;
