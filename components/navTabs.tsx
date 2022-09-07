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
  const handleChange = (newValue: number) => {
    // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
    newValue == -1 ? setActiveTab(0) : setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", opacity: "90%" }}>
      <StyledTabs
        value={activeTab}
        aria-label="nav tabs"
      > 
        
        <Tab icon={<img src="/img/owl4.png" style={{height: 90}} />} sx={{color: "black !important", fontFamily: "math", fontSize: "larger"}} aria-label="label" label="Izumi" />
        <StyledTab label={Constants.LABEL_LANDING} href={{
            pathname: "/",
            query: {tab: 0, category: "Home"}, // the data
          }} onClick={() => handleChange(0)} value={0}/>
        <StyledTab label={Constants.LABEL_CHEM} href={{
            pathname: "/posts",
            query: {tab: 1, category: "Chemistry"}, // the data
          }} onClick={() => handleChange(1)} value={1} />
        <StyledTab label={Constants.LABEL_AI} href={{
            pathname: "/posts",
            query: {tab: 2, category: "AI"}, // the data
          }} onClick={() => handleChange(2)} value={2}/>
        <StyledTab label={Constants.LABEL_PROGRAMMING} href={{
            pathname: "/posts",
            query: {tab: 3, category: "Programming"}, // the data
          }} onClick={() => handleChange(3)} value={3}/>
        <StyledTab label={Constants.LABEL_MATH_FOR_SCI} href={{
            pathname: "/posts",
            query: {tab: 4, category: "Math"}, // the data
          }} onClick={() => handleChange(4)} value={4}/>
        <StyledTab label={Constants.LABEL_ABOUT} href={{
            pathname: "/about",
            query: {tab: 5, category: "About"}, // the data
          }} onClick={() => handleChange(5)} value={5}/>
      </StyledTabs>
    </Box>
  );
}
