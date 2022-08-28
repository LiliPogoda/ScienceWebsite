import * as React from "react";
import Layout from "../components/layout";
import Date from "../components/date";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function PostListV2({
  allPostsData,
  pageIdx,
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
}) {
  return (
    <Layout pageIdx={pageIdx}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {allPostsData.map(post => (
            <Grid item key={post.id}>
                <Card elevation={3} sx={{ maxWidth: 350, height: 350 }}>
                    <CardMedia
                        component="img"
                        width="350"
                        image={post.thumbnail}
                        alt="thumbnail"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {post.abstract}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={`/posts/${post.id}`}>
                            <Button size="small">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
      </Box>
    </Layout>
  );
}
