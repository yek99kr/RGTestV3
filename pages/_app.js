import "../styles/globals.css";
import SEO from "../components/SEO";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import useMediaQueryHeight from "../utils/useMediaQueryHeight";
import ShopProvider from "../context/shopContext";
import { GoogleAnalytics } from "nextjs-google-analytics";
import ContactPage from "../components/ContactPage";

function MyApp({ router, Component, pageProps }) {
  const isSmallestHeight = useMediaQueryHeight(349);

  return (
    <>
      <SEO />
      <GoogleAnalytics strategy="lazyOnload" />
      <ShopProvider>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            {!isSmallestHeight && <Nav />}

            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {!isSmallestHeight ? (
                <Component {...pageProps} key={router.asPath} router={router} />
              ) : (
                <ContactPage />
              )}
            </AnimatePresence>
          </PrismicPreview>
        </PrismicProvider>
      </ShopProvider>
    </>
  );
}

export default MyApp;
