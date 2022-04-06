import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";
import { DefaultSeo, NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
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
      <DefaultSeo
        defaultTitle="MYKITCHEN"
        canonical="https://my-kitchen-steel.vercel.app/"
        description="test"
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          title: "MYKITCHEN",
          description: "testtest",
          site_name: "MYKITCHEN",
          url: "https://my-kitchen-steel.vercel.app/",
          images: [
            {
              url: "../public/ogp.png",
              width: 800,
              height: 800,
              alt: "ogp-img",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
