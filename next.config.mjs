import createMDX from "@next/mdx";
import remarkDirective from "remark-directive"
import remarkDirectiveRehype from "remark-directive-rehype"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";

const isProd = process.env.NODE_ENV.trim() === "production";
console.log(process.env.NODE_ENV.trim());

const pagePath = "";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkDirective,
      remarkDirectiveRehype,
      remarkMath],
    rehypePlugins: [rehypeMathjax, rehypeHighlight],
  },
});

export default withMDX(nextConfig)
