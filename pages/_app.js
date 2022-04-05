import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";
import Seo from "../components/Seo/Seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* <title>MYKITCHEN</title>
        <meta property="description" content="MYKITCHENNNN" />
        <meta property="og:title" content="MYKITCHEN" /> */}
        <Seo
          pageTitle={"site title"}
          pageDescription={"site description"}
          pageImg={"https://demo.com"}
          pageImgWidth={1280}
          pageImgHeight={960}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
