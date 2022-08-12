import * as React from "react";
import { GetStaticProps } from "next";

import { getSortedPostsData } from "../lib/posts";

import PostList from "../components/postList";

const categoryName = "ai";

export default function Chemistry({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
  }[];
}) {
  return (
    <PostList allPostsData={allPostsData} category={categoryName} pageIdx={2} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData(categoryName);
  return {
    props: {
      allPostsData,
    },
  };
};
