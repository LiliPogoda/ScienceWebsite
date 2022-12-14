import * as React from "react";
import Layout from "../components/layout";
import Date from "../components/date";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function PostListV2({
  allPostsData,
  pageIdx,
  unWrapped
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
    thumbnail: string;
    categories: Array<string>;
    abstract: string;
  }[];
  pageIdx: number;
  unWrapped?: boolean;
}) {
  return unWrapped ? (
    <Grid container spacing={3}>
            {allPostsData.map(post => (
            <Grid item key={post.id}>
                <Card elevation={3} sx={{ maxWidth: 315, height: 400 }}>
                    <CardMedia
                        component="img"
                        width="313"
                        height="200"
                        image={post.thumbnail}
                        alt="thumbnail"
                    />
                    <CardContent>
                        <a href={`/posts/${post.id}`} style={{color: "black"}}>
                        <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                        </Typography>
                        </a>
                        <Typography variant="body2" color="text.secondary">
                        {post.abstract}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
  ) :(
    <Layout pageIdx={pageIdx}>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
            {allPostsData.map(post => (
            <Grid item key={post.id}>
                <Card elevation={3} sx={{ maxWidth: 315, height: 400 }}>
                    <CardMedia
                        component="img"
                        width="313"
                        height="200"
                        image={post.thumbnail}
                        alt="thumbnail"
                    />
                    <CardContent>
                        <a href={`/posts/${post.id}`} style={{color: "black"}}>
                        <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                        </Typography>
                        </a>
                        <Typography variant="body2" color="text.secondary">
                        {post.abstract}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
      </Box>
    </Layout>
  );
}
