import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Date from "../components/date";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function PostList({
  allPostsData,
  pageIdx,
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
  }[];
  pageIdx: number;
}) {
  console.log(allPostsData)
  return (
    <Layout pageIdx={pageIdx}>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <nav aria-label="secondary mailbox folders">
            <List>
              {allPostsData.map(({ id, date, title, author }) => (
                <Paper key={id}>
                  <ListItem disablePadding>
                    <a href={`/posts/${id}`} style={{color: "black", width: "100%"}}>
                      <ListItemButton>
                        <ListItemText primary={title} />
                        {author},
                        <Date dateString={date} style={{ marginLeft: "5px" }} />
                      </ListItemButton>
                    </a>
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
