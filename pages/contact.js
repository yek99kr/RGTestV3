// import HomePage from "../components/Home/HomePage";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactPage from "../components/ContactPage";

// import useMediaQueryHeight from "../utils/useMediaQueryHeight";
// import useMediaQueryWidth from "../utils/useMediaQueryWidth";
// import useIsTouch from "../utils/useIsTouch";

export default function Contact({ router }) {
  return (
    <>
      <motion.div
        key={router.route}
        className="fixed overflow-hidden w-[100vw] h-[100vw]"
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ delay: 0.3, default: { duration: 0.7 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <ContactPage />
      </motion.div>
    </>
  );
}

{
  /* <span
                className="insta cursor-pointer inline-block thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span className="wiggle1 text-pink-500">h</span>
                <span className="wiggle2 text-sky-400">e</span>
                <span className="wiggle3 text-yellow-500">l</span>
                <span className="wiggle4 text-purple-500">l</span>
                <span className="wiggle5 text-pink-500">o</span>
                <span className="wiggle6 text-sky-400">@</span>
                <span className="wiggle7 text-pink-500">r</span>
                <span className="wiggle8 text-yellow-500">e</span>
                <span className="wiggle9 text-green-500">a</span>
                <span className="wiggle10 text-pink-500">l</span>
                <span className="wiggle11 text-sky-400">g</span>
                <span className="wiggle1 text-yellow-500">o</span>
                <span className="wiggle2 text-purple-500">o</span>
                <span className="wiggle3 text-pink-500">d</span>
                <span className="wiggle4 text-sky-400">.</span>
                <span className="wiggle5 text-pink-500">t</span>
                <span className="wiggle6 text-yellow-500">v</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    alt="send"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    alt="email"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span> */
}
