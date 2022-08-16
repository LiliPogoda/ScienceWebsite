import * as React from "react";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";

import { getAllPostIds, getPost } from "../../lib/posts";
import LayoutPostWrapper from "../../components/layoutPostWrapper";
import { displayLuciferase, renderMol2D } from "../../lib/molView";
import { fireFlies } from "../../lib/fireflies";

export default function Chemistry({ source, title, date, author }) {
  return (
    <LayoutPostWrapper date={date} title={title} pageIdx={1}>
      <MDXRemote
        {...source}
        scope={{ displayLuciferase, fireFlies, renderMol2D }}
      />
    </LayoutPostWrapper>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const source = await getPost(path.join("chemistry", params.id as string));
  const matterResult = matter(source);
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, require("remark-prism")],
      rehypePlugins: [rehypeMathjax],
      format: "mdx",
    },
  });
  return {
    props: {
      source: mdxSource,
      ...(matterResult.data as {
        date: string;
        title: string;
        author: string;
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds("chemistry");
  return {
    paths,
    fallback: false,
  };
};
