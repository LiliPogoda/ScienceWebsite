import * as React from "react";
import PostList from "../components/postList";
import posts from "../posts/posts"


export default function Chemistry() {

  const [currentCategory, setCurrentCategory] = React.useState("Chemistry")

  return (
    <PostList allPostsData={posts.filter(post => post.categories.includes(currentCategory))} pageIdx={1} />
  );
}
