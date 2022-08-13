import * as React from "react";
import { GetStaticProps } from "next";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { testFunc } from "../../lib/math";
import LayoutPostWrapper from "../../components/layoutPostWrapper";

const categoryName = "math";

export default function Chemistry({ source }) {
  return (
    <LayoutPostWrapper date="2022-08-12" title="LaTex" pageIdx={2}>
      <MDXRemote {...source} />
    </LayoutPostWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const source = await testFunc();
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
      format: "mdx",
    },
  });
  return { props: { source: mdxSource } };
};
