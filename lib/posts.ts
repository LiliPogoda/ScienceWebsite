import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";
import { evaluate, compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime.js";

// path to the directory in which the posts are stored
const pagesPath = path.join(process.cwd(), "pages");

const handleMdx = async (fileName, postsDirectoryPath) => {
  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.mdx$/, "");

  // Read markdown file as string
  const fullPath = path.join(postsDirectoryPath, fileName);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const compiledContent = await compile(fileContents, {
    ...runtime,
    outputFormat: "program",
  } as any);
  const metaExpression =
    (compiledContent.value as any).split("}")[0].split("*/")[1] + "}";
  const { meta } = await evaluate(metaExpression, {
    ...runtime,
  } as any);
  const { title, date, author } = meta as any;

  // Combine the data with the id
  return {
    id,
    title,
    date,
    author,
  };
};

/**
 * Retrieve a sparse list of posts from the respective folder.
 */
export const getSortedPostsData = async (folder): Promise<Array<Post>> => {
  // Get file names under /posts
  const postsDirectoryPath = path.join(pagesPath, folder);
  const fileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = fileNames.map(async (fileName) => {
    if (fileName.includes(".mdx")) {
      return handleMdx(fileName, postsDirectoryPath);
    } else {
      console.log(process.cwd());
      const fullPath = path.join(process.cwd(), "test");
      const test = import(fullPath);
      console.log(test);
    }
  });
  const data = await Promise.all(allPostsData);
  // Sort posts by date
  return data.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

/**
 * Retrieve the IDs of all posts.
 */
export const getAllPostIds = (folder) => {
  const postsDirectoryPath = path.join(pagesPath, folder);
  const fileNames = fs.readdirSync(postsDirectoryPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
};
