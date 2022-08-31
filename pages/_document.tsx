/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/*<!-- Google tag (gtag.js) -->*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-83EMYWNDG1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){(dataLayer).push(arguments)}
          gtag("js", new Date());
          gtag('config', 'G-83EMYWNDG1');
        </script>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"></link>
        <script src="https://3Dmol.csb.pitt.edu/build/3Dmol-min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
