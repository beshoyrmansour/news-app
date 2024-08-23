import { StyleSheet, SafeAreaView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useContext } from 'react';
import { PostsContext } from './_layout';
import { FlatList, RefreshControl } from 'react-native';
import { Post } from '@/types/posts';
import PostCard from '@/components/PostCard';
import { ThemedView } from '@/components/ThemedView';

export default function PostsScreen() {
  const {
    postsData,
    postsIsLoading,
    postsRefetch,
    postsIsFetching,
    postsError,
    postsIsError,
  } = useContext(PostsContext);

  if (postsIsLoading) {
    return (<ThemedView>
      <ThemedText>posts is Loading...</ThemedText>
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
                colors={["white", "#aa0082"]}
                tintColor="#aa0082"
                progressBackgroundColor={"#aa0082"}
              >
                <ThemedText style={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: 2 }}>Pull to Refresh</ThemedText>
              </RefreshControl>
            }
          />
        ) : (
          <ThemedView>
            <ThemedText style={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: 2 }}>Pull to Refresh</ThemedText>
          </ThemedView>
        )
        }
      </SafeAreaView>
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    gap: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
});
