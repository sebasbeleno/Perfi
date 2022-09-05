import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {HeadBar, Feed} from './Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizing} from '../../Styles';
import {Pluse} from '../../Icons';
import {Store} from '../../Redux/Store';
import {loadPosts} from '../../Redux/Posts/actions';
import {PostType} from '../../types';
import {Text} from 'react-native-svg';

const MomentsScreen = (props: any) => {
  const [posts, setPosts] = useState<[] | PostType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = () => {
    Store.dispatch(loadPosts());
    const Posts = Store.getState().posts.posts;

    if (Posts.length > 0) {
      setPosts(Posts);
    }
  };

  const onRefresh = async () => {
    setIsFetching(true);
    firstLoad();
    setIsFetching(false);
  };

  const handleAddPost = () => {
    // TODO
    props.navigation.navigate('AddPost');
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <Text>{Store.getState().posts.loading}</Text>
        <HeadBar navigation={props.navigation} />
      </SafeAreaView>
      <Feed posts={posts} isFetching={isFetching} onRefresh={onRefresh} />
      <TouchableHighlight
        style={Styles.actionButtonPosition}
        onPress={handleAddPost}>
        <View>
          <Pluse width={Sizing.icons.x20} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonPosition: {
    position: 'absolute',
    bottom: Sizing.x10,
    right: Sizing.x10,
    width: Sizing.x60,
    height: Sizing.x60,
    borderRadius: Sizing.x60,
    backgroundColor: Colors.primary.s200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MomentsScreen;
