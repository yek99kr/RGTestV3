import "../styles/globals.css";
// import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { AppContextProvider } from "../context/AppContext";
import Nav from "../components/Nav";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import useMediaQueryHeight from "../utils/useMediaQueryHeight";
import "keen-slider/keen-slider.min.css";
import ShopProvider from "../context/shopContext";
import EmailSubscribe from "../components/EmailSubscribe";

function MyApp({ Component, pageProps, router }) {
  const isSmallestHeight = useMediaQueryHeight(349);
  // console.log(router.asPath);

  return (
    <>
      {/* <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Real Good Studio</title>

        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head> */}
      {/* <GoogleAnalytics strategy="lazyOnload" /> */}
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
            {!isSmallestHeight && (
              <>
                <Nav />
                <EmailSubscribe router={router} />
              </>
            )}
            <AppContextProvider>
              <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                {!isSmallestHeight ? (
                  <Component
                    {...pageProps}
                    key={router.asPath}
                    router={router}
                  />
                ) : (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[87vw] text-[3.1vw] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24.5px] text-center">
                    <p className="font-[400] select-auto">
                      Currently taking on select projects.{" "}
                      <a
                        href="mailto: hello@realgood.tv"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="thumbcursor">
                          <span>hello@realgood.tv</span>

                          <img
                            src="/email.png"
                            alt="email"
                            className="w-[1.3em] inline m-2 noselect"
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </AppContextProvider>
          </PrismicPreview>
        </PrismicProvider>
      </ShopProvider>
    </>
  );
}

export default MyApp;
