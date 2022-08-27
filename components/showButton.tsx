/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";


export default function ShowButton ({containerID, label}) {
    const [opened, setOpened] = React.useState(false)

    const handleClick = () => {
        console.log(opened)
        document.getElementById(containerID).style.display = opened ? "none" : "";
        setOpened(!opened);
    }
    
    return (
      <>
        <Button onClick={() => {console.log("test")}}>
          {label}
        </Button>
      </>
    );
}