import { useEffect, useState } from "react";
import { GetAllPosts, GetPostDetails } from "@/services/PostsService";
import { Post, UsePostsType } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";

const usePosts: () => UsePostsType = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [currentPostId, setCurrentPostId] = useState<string>();
  const [currentPost, setCurrentPost] = useState<Post>();

  const {
    data: postsData,
    error: postsError,
    refetch: postsRefetch,
    isError: postsIsError,
    isFetched: postsIsFetched,
    isLoading: postsIsLoading,
    isFetching: postsIsFetching,
    isRefetching: postsIsRefetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: GetAllPosts,
  });

  const findPostDataAndIndexById = (postId: string | undefined) => {
    let post,
      index = -1;
    if (postId && posts.length > 0) {
      index = posts.findIndex((post) => post.id.toString() === postId);
      post = posts[index];
      setCurrentPost(posts[index]);
    } else {
      postRefetch();
    }
    return {
      post,
      index,
    };
  };

  const {
    data: postData,
    error: postError,
    refetch: postRefetch,
    isError: postIsError,
    isFetched: postIsFetched,
    isLoading: postIsLoading,
    isFetching: postIsFetching,
    isRefetching: postIsRefetching,
  } = useQuery({
    queryKey: ["postDetails", currentPostId],
    enabled: false,
    // Boolean(currentPostId) &&
    // findPostDataAndIndexById(currentPostId).index === -1,
    queryFn: () => GetPostDetails(currentPostId || ""),
  });

  useEffect(() => {
    if (currentPostId) {
      findPostDataAndIndexById(currentPostId);
      
    }
  }, [currentPostId]);

  const updateCurrentPostId = (newValue: string) => {
    setCurrentPostId(newValue);
  };

  // Set POst List when recive new data from query "posts"
  useEffect(() => {
    if (postsData) setPosts(postsData.data);
  }, [postsData]);

  // Set Current POst when recive new data from query "postDetails"
  useEffect(() => {
    if (postData) setCurrentPost(postData.data);
  }, [postData]);

  // inCase of error due to unstable backend (its a free API after all)
  // I load these data as backup plane 😉
  useEffect(() => {
    if (postsIsError)
      setPosts([
        {
          id: 1571,
          userId: 3215,
          title:
            "Convoco concido accusamus triumphus crebro avarus supplanto timidus circumvenio aspicio solutio civis",
          body: "Avaritia infit valde. Alveus caries temporibus. Delicate pectus natus. Vesper patria adipiscor. Vapulu",
          // cover_url:"https://images.unsplash.com/photo-1691493261970-1b4afc2391be?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 1572,
          userId: 3215,
          title:
            "Convoco concido accusamus triumphus crebro avarus supplanto timidus circumvenio aspicio solutio civis",
          body: "Avaritia infit valde. Alveus caries temporibus. Delicate pectus natus. Vesper patria adipiscor. Vapulu",
          cover_url:
            "https://images.unsplash.com/photo-1691493506825-248842e9a4db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 1573,
          userId: 3215,
          title:
            "Convoco concido accusamus triumphus crebro avarus supplanto timidus circumvenio aspicio solutio civis",
          body: "Avaritia infit valde. Alveus caries temporibus. Delicate pectus natus. Vesper patria adipiscor. Vapulu",
          cover_url:
            "https://images.unsplash.com/photo-1673712981976-93dccd7699d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 1574,
          userId: 3215,
          title:
            "Convoco concido accusamus triumphus crebro avarus supplanto timidus circumvenio aspicio solutio civis",
          body: "Avaritia infit valde. Alveus caries temporibus. Delicate pectus natus. Vesper patria adipiscor. Vapulu",
          cover_url:
            "https://images.unsplash.com/photo-1696163669653-7c753e23d267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]);
  }, [postsIsError]);

  useEffect(() => {
    return () => {
      if (postIsError) {
        setCurrentPost({
          id: 1574,
          userId: 3215,
          title:
            "Convoco concido accusamus triumphus crebro avarus supplanto timidus circumvenio aspicio solutio civis",
          body: "Avaritia infit valde. Alveus caries temporibus. Delicate pectus natus. Vesper patria adipiscor. Vapulu",
        });
      }
    };
  }, [postIsError]);

  return {
    postsData: posts,
    postsError,
    postsRefetch,
    postsIsError,
    postsIsFetched,
    postsIsLoading,
    postsIsFetching,
    postsIsRefetching,

    updateCurrentPostId,

    postData: currentPost,
    postError,
    postRefetch,
    postIsError,
    postIsFetched,
    postIsLoading,
    postIsFetching,
    postIsRefetching,
  };
};

export default usePosts;
