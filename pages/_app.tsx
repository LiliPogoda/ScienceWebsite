import "../styles/global.css";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/global.css";
import styles from "../styles/utils.module.css";
import Button from "@mui/material/Button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "py-env": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const components = {
  Button,
};

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
