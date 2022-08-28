import * as React from "react";
import PostList from "../components/postList";
import PostListV2 from "../components/postListv2";
import posts from "../posts/posts"
import { useRouter } from "next/router";


export default function Programming() {
  const router = useRouter()
  const data = router.query

  return (
    <PostListV2 allPostsData={posts.filter(post => post.categories.includes(data.category as string))} pageIdx={parseInt(data.tab as string)} />
  );
}
