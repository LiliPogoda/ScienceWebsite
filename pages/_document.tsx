/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

declare global {
  interface Window {
    // TODO: replace this with a more specific type based on usage
    dataLayer: any[];
  }
}

export default function Document() {
  return (
    <Html>
      <Head>
        {/*<!-- Google tag (gtag.js) -->*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-83EMYWNDG1"></script>
        <script src="/google.js"></script>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/3Dmol/1.8.0/3Dmol.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
