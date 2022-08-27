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
export const StyledTab = styled((props: StyledTabProps) => (
  <Link href={props.href} passHref>
  <Tab
    label={props.label}
    onClick={props.onClick}
  />
  </Link>
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  "&.Mui-focusVisible": {},
  "&.MuiTab-textColorPrimary": {},
  "&.Mui-selected": {},
}));

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
