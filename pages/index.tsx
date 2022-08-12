/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";

import Constants from "../lib/constants";

import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout pageIdx={0}>
      <Stack spacing={1}>
        <Paper elevation={3} style={{ opacity: "90%" }}>
          <Container maxWidth="md" className={styles.padded}>
            TODO
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}
