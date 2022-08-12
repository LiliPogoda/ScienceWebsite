import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import Constants from "../lib/constants";

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function Research({
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
    <Layout pageIdx={1}>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <nav aria-label="secondary mailbox folders">
            <List>
              {allPostsData.map(({ id, date, title, author }) => (
                <Paper key={id}>
                  <ListItem disablePadding>
                    <Link href={`/chemistry/${id}`} passHref>
                      <ListItemButton>
                        <ListItemText primary={title} />
                        {author},
                        <Date dateString={date} style={{ marginLeft: "5px" }} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <Divider />
                </Paper>
              ))}
            </List>
          </nav>
        </Stack>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData("chemistry");
  return {
    props: {
      allPostsData,
    },
  };
};
