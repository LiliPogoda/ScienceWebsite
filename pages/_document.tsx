import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
        ;
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
