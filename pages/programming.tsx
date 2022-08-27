import * as React from "react";
import PostList from "../components/postList";
import posts from "../posts/posts"


export default function Programming() {

  const [currentCategory, setCurrentCategory] = React.useState("Programming")

  return (
    <PostList allPostsData={posts.filter(post => post.categories.includes(currentCategory))} pageIdx={3} />
  );
}
