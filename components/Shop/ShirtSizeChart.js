import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LiaRulerHorizontalSolid } from "react-icons/lia";

const ShirtSizeChart = ({}) => {
  const [sizeChart, setSizeChart] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          setSizeChart(true);
        }}
        className="inline thumbcursor"
      >
        <div className="inline-block top-1.5 sm:top-1 relative text-[1.3rem] sm:text-xl">
          <LiaRulerHorizontalSolid />
        </div>{" "}
        <p className="underline inline-block text-[3vw] sm:text-base mt-3 mb-0">
          Size Chart
        </p>
      </div>

      <div
        className={`fixed z-[100000] left-0 top-0 w-[100vw] h-[100vh] text-[2.5vw] md:text-sm ${
          sizeChart ? "block" : "hidden"
        }`}
      >
        <div className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded drop-shadow-lg fixed chart z-[1000000] w-[90%] h-[320px] sm:w-[80%] sm:h-[350px] md:w-[650px] md:h-[380px] bg-white opacity-100">
          <div
            onClick={() => {
              setSizeChart(false);
            }}
            className="absolute thumbcursor text-xl md:text-2xl top-2 right-2"
          >
            <IoClose />
          </div>

          <p className="absolute text-lg md:text-xl pt-5 left-[50%] translate-x-[-50%]">
            Size Guide
          </p>

          <div className="grid mt-12 md:mt-16 grid-cols-4 gap-8 sm:gap-10 pr-12 pl-12 p-5">
            <div className="font-bold">Size Label</div>
            <div className="font-bold">Length</div>
            <div className="font-bold">Width</div>
            <div className="font-bold">Sleeve</div>

            <div>S</div>
            <div>28 in</div>
            <div>18 in</div>
            <div>15 5/8 in</div>

            <div>M</div>
            <div>29 in</div>
            <div>20 in</div>
            <div>17 in</div>

            <div>L</div>
            <div>30 in</div>
            <div>22 in</div>
            <div>18 1/2 in</div>

            <div>XL</div>
            <div>31 in</div>
            <div>24 in</div>
            <div>20 in</div>
          </div>
        </div>
        <div
          onClick={() => {
            setSizeChart(false);
          }}
          className="fixed z-[100000] opacity-50 w-[100vw] h-[100vh] bg-black"
        ></div>
      </div>
    </>
  );
};

export default ShirtSizeChart;
