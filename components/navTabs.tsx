/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { StyledTab, StyledTabs } from "./styledTabs";

import Constants from "../lib/constants";

/**
 * Navigation Bar.
 * @param pageIdx The index of the currently active tab.
 * @returns {React.ReactNode} The navigation bar.
 */
export default function NavTabs({ pageIdx }: { pageIdx: number }) {
  // Stateful variable that tracks the currently active tab
  const [activeTab, setActiveTab] = React.useState(pageIdx);

  /**
   * Helper function to handle clicks on the tabs.
   * @param event - The DOM click-event.
   * @param newValue - The index of the clicked tab.
   */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
    newValue == -1 ? setActiveTab(0) : setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", opacity: "90%" }}>
      <StyledTabs
        value={activeTab}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <StyledTab label={Constants.LABEL_LANDING} href="/" />
        <StyledTab label={Constants.LABEL_CHEM} href="/chemistry" />
        <StyledTab label={Constants.LABEL_AI} href="/ai" />
        <StyledTab label={Constants.LABEL_PROGRAMMING} href="/programming" />
        <StyledTab label={Constants.LABEL_MATH_FOR_SCI} href="/math" />
        <StyledTab label={Constants.LABEL_ABOUT} href="/about" />
      </StyledTabs>
    </Box>
  );
}
