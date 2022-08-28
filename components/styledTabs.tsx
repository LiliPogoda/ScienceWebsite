/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/**
 *
 * Styled navigation tab.
 *
 */

interface StyledTabProps {
  label: string;
  href: {pathname:string, query: {tab: number, category: string}};
  component?: any;
  rel?: string;
  target?: string;
  onClick: () => void;
  value: number;
}

/**
 * Customized MUI Tab Element
 */
export const StyledTab = (props: StyledTabProps) => (
  <Link href={props.href} passHref>
  <Tab
    label={props.label}
    onClick={props.onClick}
    sx={{
      color: "black", 
      opacity: "100%",
      textTransform: "none",
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      fontSize: "1.2rem",
      fontWeight: "600",
      lineHeight: "2.5"
    }}
  />
  </Link>
)

/**
 *
 * Styled navigation bar.
 *
 */

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
}

/**
 * Customized MUI Tabs Element.
 */
export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-scroller": {
    backgroundColor: "#fff",
  },
});
