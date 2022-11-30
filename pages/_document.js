import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Robot Santa" key="title" />
        <meta
          property="og:description"
          content="customized letters from the big man and his crew powered by A.I."
          key="description"
        />
        <meta
          property="og:image"
          content="../public/Robot Santa 425 x 810.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
