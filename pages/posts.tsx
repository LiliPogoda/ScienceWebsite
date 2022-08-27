import * as React from "react";
import PostList from "../components/postList";
import posts from "../posts/posts"
import { useRouter } from "next/router";


export default function Programming() {
  const router = useRouter()
  const data = router.query

  return (
    <PostList allPostsData={posts.filter(post => post.categories.includes(data.category as string))} pageIdx={parseInt(data.tab as string)} />
  );
}
