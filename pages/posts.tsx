import * as React from "react";
import PostList from "../components/postList";
import PostListV2 from "../components/postListv2";
import posts from "../posts/posts"
import { useRouter } from "next/router";
import LayoutPostWrapper from "../components/layoutPostWrapper";
import {setBackgroundColor} from "../lib/style"


export default function Programming() {
  setBackgroundColor("white")
  const router = useRouter()
  const data = router.query

  const pageIdx = parseInt(data.tab as string)
  const postData = posts.filter(post => post.categories.includes(data.category as string))


  return postData.length > 0 ? (
    <PostListV2 allPostsData={postData} pageIdx={pageIdx} />
  ) : (
    <LayoutPostWrapper pageIdx={pageIdx}>
      <h1 style={{marginLeft: "auto", marginRight: "auto", width: "max-content"}}>Coming Soon...</h1>
    </LayoutPostWrapper>
  );
}
