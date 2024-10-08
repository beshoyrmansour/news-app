import { StyleSheet, SafeAreaView, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useContext } from 'react';
import { PostsContext, UsersContext } from './_layout';
import { FlatList, RefreshControl } from 'react-native';
import { Post } from '@/types/posts';
import PostCard from '@/components/posts/PostCard';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { Stack } from 'expo-router';
import images from "../../constants/images";
import { useThemeColor } from '@/hooks/useThemeColor';
import Loader from '@/components/loader';
import EmptyState from '@/components/EmptyState';

export default function PostsScreen() {
  const {
    postsData,
    postsIsLoading,
    postsRefetch,
    postsIsFetching,
    postsIsError,
  } = useContext(PostsContext);
  const brandColorThemeColor = useThemeColor({ light: '', dark: '' }, 'tint');
  const { usersData } = useContext(UsersContext);


  if (postsIsLoading) {
    return (<ThemedView>
      <Loader isLoading={postsIsLoading} />
    </ThemedView>)
  }
  if (postsIsError) {
    return (<ThemedView>
      <ThemedText>posts has Error</ThemedText>
    </ThemedView>)
  }

  return (

    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.container}>
        {postsData.length > 0 ? (
          <FlatList
            data={postsData}
            renderItem={({ item }: { item: Post }) => <PostCard {...item} />}
            keyExtractor={(item: Post) => item.id.toString()}
            contentContainerStyle={styles.list}
            onRefresh={postsRefetch}
            refreshing={postsIsFetching}
            refreshControl={
              <RefreshControl
                refreshing={postsIsFetching}
                onRefresh={postsRefetch}
                colors={["white", brandColorThemeColor]}
                tintColor={brandColorThemeColor}
                progressBackgroundColor={brandColorThemeColor}
              >
                <ThemedText style={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: 2 }}>Pull to Refresh <HelloWave /></ThemedText>
              </RefreshControl>
            }
            ListEmptyComponent={() => (
              <EmptyState
                title="No Posts Found"
                subtitle="No now posts yet"
              />
            )}
          />
        ) : (
          <ThemedView>
            <ThemedText style={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: 2 }}>No Posts Yet</ThemedText>
          </ThemedView>
        )
        }
      </SafeAreaView>
      <Stack.Screen
        options={{
          headerLargeTitle: true,
          title: 'List',
          headerTitleStyle: {
            color: brandColorThemeColor
          },
          headerTitle: () => (
            <Image source={images.largeLogo} resizeMode="contain" style={{
              height: 27,
              width: 70
            }} />)
        }} />
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
});
