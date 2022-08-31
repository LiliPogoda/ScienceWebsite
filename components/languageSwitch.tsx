/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function LanguageSwitch({ containerID, label }) {
  const [language, setLanguage] = React.useState("eng");

  const handleEngButton = () => {
    if (language !== "eng") {
        const gerContainers = document.getElementsByClassName("gerContainer")
        const engContainers = document.getElementsByClassName("engContainer")
        Array.from(gerContainers as HTMLCollectionOf<HTMLElement>).forEach(
          (container) => {
            container.style.display = "none";
          }
        );
        Array.from(engContainers as HTMLCollectionOf<HTMLElement>).forEach(
          (container) => {
            container.style.display = "";
          }
        );
        setLanguage("eng")
    }
  };

  const handleGerButton = () => {
    console.log("hmmmmmmm")
    console.log(language)
    if (language !== "ger") {
      const gerContainers = document.getElementsByClassName("gerContainer");
      console.log(gerContainers)
      const engContainers = document.getElementsByClassName("engContainer");
      Array.from(engContainers as HTMLCollectionOf<HTMLElement>).forEach(
        (container) => {
          container.style.display = "none";
        }
      );
      Array.from(gerContainers as HTMLCollectionOf<HTMLElement>).forEach(
        (container) => {
          container.style.display = "";
        }
      );
      setLanguage("ger");
    }
  }

  return (
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      <Grid item>
        <Button style={{paddingLeft: "0px"}}
          onClick={handleEngButton}
          disabled={language === "eng"}
        >
          English
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={handleGerButton}
          disabled={language === "ger"}
        >
          German
        </Button>
      </Grid>
    </Grid>
  );
}
