import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="md:w-[90vw] w-[100vw] h-[100vh] text-[4vw] 4xs:text-[4vw] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] font-bold ">
        {/* <span className="wiggle1 text-pink-500">e</span>
        <span className="wiggle2 text-sky-400">r</span>
        <span className="wiggle3 text-yellow-500">r</span>
        <span className="wiggle4 text-purple-500">o</span>
        <span className="wiggle5 text-green-500">r</span>{" "}
        <span className="wiggle6 text-pink-500">o</span>
        <span className="wiggle7 text-sky-400">c</span>
        <span className="wiggle8 text-yellow-500">c</span>
        <span className="wiggle9 text-purple-500">u</span>
        <span className="wiggle1 text-pink-500">r</span>
        <span className="wiggle2 text-sky-400">r</span>
        <span className="wiggle3 text-yellow-500">e</span>
        <span className="wiggle4 text-purple-500">d</span>{" "} */}
        <span className="font-normal">
          Error occurred. Please try visiting{" "}
          <Link href="/work" className="thumbcursor">
            <span className="font-bold thumbcursor">
              <span className="wiggle1 text-pink-500">w</span>
              <span className="wiggle2 text-sky-400">o</span>
              <span className="wiggle3 text-yellow-500">r</span>
              <span className="wiggle4 text-purple-500">k</span>
            </span>
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default Error;
