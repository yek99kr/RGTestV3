import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Real Good Studio</title>
      <meta
        name="description"
        content="Real Good is a creative studio specializing in good ideas."
      />
      <meta property="og:title" content="Real Good Studio" />
      <meta
        property="og:description"
        content="Real Good is a creative studio specializing in good ideas."
      />
      <meta property="og:url" content="realgood.tv" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content="Real Good Studio" />
      <meta
        property="twitter:description"
        content="Real Good is a creative studio specializing in good ideas."
      />

      <meta property="twitter:image" content="/meta.jpg" />
      <meta property="og:image" content="/meta.jpg" />
      <meta property="og:video" content="/meta.jpg" />
      <meta property="twitter:image:alt" content="Real Good Studio" />
      <meta property="og:site_name" content="Real Good Studio" />
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </Head>
  );
};

export default SEO;
