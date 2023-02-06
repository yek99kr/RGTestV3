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

function MyApp({ Component, pageProps, router }) {
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
                // <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[87vw] text-[3.1vw] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24.5px] text-center">
                //   <p className="font-[400] select-auto">
                //     Currently taking on select projects.{" "}
                //     <a
                //       href="mailto: hello@realgood.tv"
                //       target="_blank"
                //       rel="noreferrer"
                //     >
                //       <span className="thumbcursor">
                //         <span>hello@realgood.tv</span>

                //         <img
                //           src="/email.png"
                //           alt="email"
                //           className="w-[1.3em] inline m-2 noselect"
                //         />
                //       </span>
                //     </a>
                //   </p>
                // </div>
              )}
            </AnimatePresence>
          </PrismicPreview>
        </PrismicProvider>
      </ShopProvider>
    </>
  );
}

export default MyApp;
