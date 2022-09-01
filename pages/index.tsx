/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import * as React from "react"
import Layout from "../components/layout";
import ConstructionIcon from '@mui/icons-material/Construction';
import Container from "@mui/material/Container";
import {setBackgroundColor} from "../lib/style"
import Carousel from 'react-material-ui-carousel'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Button } from '@mui/material'
import {
  CardMedia,
  Typography,
  Grid,
  Paper,
  Stack
} from '@mui/material';
import posts from "../posts/posts"
import PostListV2 from "../components/postListv2";
import styles from "../styles/utils.module.css";

const mediaCaptionCSS: React.CSSProperties = {
  textOverflow: "ellipsis",
  position: "absolute",
  bottom: "0",
  padding: "15px",
  backgroundColor: "black",
  color: "white",
  opacity: "0.6",
  width: "100%",
  height: "15%",
  fontSize: "21px",
  fontWeight: "200",
  transition: "300ms",
  cursor: "pointer",
}


export default function Home() {
  setBackgroundColor("white")
  const sortedPostData = posts.filter(post => !post.categories.includes("WIP") && !post.categories.includes("Playground"))
  .sort((a,b) =>  new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
  return (
    <Layout pageIdx={0}>
      <Stack spacing={1}>
        <Paper elevation={0} style={{ opacity: "90%" }}>
          <Container maxWidth="xl" className={styles.padded}>
            <Stack spacing={1}>
            <div>
                <strong>Note:</strong>This Website is currently under construction. Check back regularly for updates.
            </div>
            <Carousel
                IndicatorIcon={<HorizontalRuleIcon/>}
                animation="fade" 
                navButtonsAlwaysVisible
                interval={8000}
              >
                <Paper style={{height: "400px"}}>
                  <CardMedia
                  image="/3dmol.PNG"
                  title="Explore chemistry interactively"
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    overflow: "hidden"}}
                  >
                    <Typography style={mediaCaptionCSS}>
                      Explore chemistry interactively
                    </Typography>
                  </CardMedia>
                </Paper>
                <Paper style={{height: "400px"}}>
                  <Typography style={mediaCaptionCSS}>
                      Learn how to create Artificial Intelligence 
                  </Typography>
                  <div style={{
                    width: "max-content",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "300px",
                    paddingTop: "150px"
                    }}
                  >
                    <Grid container spacing={5}>
                      <Grid item sx={{paddingTop: "0px !important"}}>
                        <img style={{height: "150px"}} src="blissey.png" alt="original"></img>
                      </Grid>
                      <Grid item sx={{paddingTop: "0px !important"}}>
                        <img style={{height: "130px", paddingTop: "10px"}} src="blissey.gif" alt="vnca"></img>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Carousel>
              <h1>What's New</h1>
              <PostListV2 allPostsData={sortedPostData} pageIdx={0} unWrapped />
            </Stack>
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}
