import React from "react";

const NoPage = () => {
  return (
    <div className="md:w-[90vw] w-[100vw] h-[100vh] text-[4vw] 4xs:text-[4vw] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] font-bold ">
        <span className="wiggle1 text-pink-500">4</span>
        <span className="wiggle2 text-sky-400">0</span>
        <span className="wiggle3 text-yellow-500">4</span>
      </div>
    </div>
  );
};

export default NoPage;
