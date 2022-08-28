/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import ConstructionIcon from '@mui/icons-material/Construction';
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
          <Container maxWidth="xl" className={styles.padded}>
            <div style={{marginLeft: "auto", marginRight: "auto", width: "min-content"}}>
              <ConstructionIcon sx={{ fontSize: 100 }}/>
            </div>
            <div style={{marginLeft: "auto", marginRight: "auto", width: "max-content"}}>
              This Website is currently under construction. Check back shortly for updates.
            </div>
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}
