import { useState } from "react";

function ContactPage(props) {
  const [hoverEmail, setHoverEmail] = useState(false);
  const [copyed, setCopyed] = useState(false);

  return (
    <>
      <div className="relative w-[100vw] h-[100vh] overflow-hidden">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[95vw] sm:w-[90vw] md:w-[88vw] lg:w-[75vw] xl:w-[63vw] 2xl:w-[60vw] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center bg-[#e9ebf0]/40 p-5">
          Currently taking on select projects.{" "}
          <span
            className="thumbcursor"
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
          >
            <span
              onClick={() => {
                navigator.clipboard.writeText("hello@realgood.tv");
                setCopyed(true);
              }}
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
            </span>
          </span>
        </div>
        <div
          className={`flex fixed w-screen justify-center items-center mt-[3.5vw] 2xs:mt-[4rem] xs:mt-[4.5rem] sm:mt-[4.5rem] text-[2.9vw] sm:text-sm md:text-base z-[1000] pointer-events-none  ${
            copyed ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 0.8s" }}
          onTransitionEnd={() => setCopyed(false)}
        >
          <div className="bg-white/60 backdrop-blur-sm w-[65vw] sm:w-[300px] md:w-[400px] rounded text-center p-2.5 ">
            <span>hello@realgood.tv copyed to clipboard</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
