import AboutDropDown from "../Home/AboutDropDown";

const About = (props) => {
  const madWords1 = [
    "production support",
    "bidding",
    "producing",
    "insurance",
    "payroll",
    "business affair",
    "contract negotiating",
    "agency and brand liason",
  ];
  const madWords2 = ["access"];
  const madWords3 = ["insight"];

  return (
    <>
      {/* <img
        className="absolute z-[-5] left-1/2 -translate-x-1/2 hidden sm:block bottom-[-5%] w-[63vw] pointer-events-none"
        src="/billboard.png"
      ></img> */}

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[77%] sm:-translate-y-[60%] leading-[1.6] md:leading-[1.5] w-[93vw] sm:w-[120vw] md:w-[110vw] lg:w-[95vw] xl:w-[86vw] max-w-[1400px] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center  p-5">
        <div className="flex justify-center items-center">
          <img
            className="block sm:hidden mb-[1vw] w-[65%] pointer-events-none select-none"
            src="/handshakesMobile.png"
          ></img>
          <img
            className="absolute z-[-5] hidden sm:block left-[-2vw]  xl:left-[-1vw] top-1/2  -translate-y-[46%] ml-0 w-[100%] aspect-video pointer-events-none select-none"
            src="/handshakes.png"
          ></img>

          {/* <iframe
            className="absolute z-[-5] hidden sm:block left-[-2vw] top-[-13vw] md:top-[-14.5vw] lg:top-[-14vw] xl:left-[-1vw] xl:top-[-12.5vw]  ml-0 w-[100%] aspect-video"
            src="https://player.vimeo.com/video/797721674?h=fc10f44377&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?loop=1&background=1&autoplay=1&muted=1&controls=0&quality=1080p&transparent=1"
            allowFullScreen
            frameBorder="0"
          ></iframe> */}
          {/* <Lottie
            className="absolute z-[-5] hidden sm:block left-[-3vw] top-[-16vw] md:top-[-18vw] lg:top-[-16vw] xl:left-[-2vw] xl:top-[-15vw]  ml-0 w-[100%] aspect-video"
            animationData={animationData}
            interactivity={interactivity}
          /> */}
        </div>

        <p className="pt-[0.8em] sm:pt-[1.3em]">
          We&apos;re{" "}
          <img
            src="/logoShort.png"
            alt="logo"
            className="inline w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[96px] 2xl:w-[103px] ml-0.5 mr-0.5"
          />{" "}
          Friends. We&apos;re part of{" "}
          <img
            src="/logoShort.png"
            alt="logo"
            className="inline w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[96px] 2xl:w-[103px] ml-0.5 mr-0.5"
          />{" "}
          Studio <br />
          but also a separate thing.
        </p>
        <p className="pt-[0.8em] sm:pt-[1.3em]">
          We help creators with all things production, like bidding, <br />
          producing, insurance, and payroll, at scale.
        </p>

        <p className="pt-[0.8em] sm:pt-[1.3em]">
          Hit us up if a brand or agency asks you to make{" "}
          <br className="block sm:hidden" />
          something <br className="hidden sm:block" /> for them and you need
          production support <br className="block sm:hidden" />
          to make it happen.
        </p>
      </div>
    </>
  );
};

export default About;
