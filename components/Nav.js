import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Shop/MiniCart";

const Nav = () => {
  const router = useRouter();

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  const [angle, setAngle] = useState("0");

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <div className="fixed top-0 pt-[2.5vw] sm:pt-3 z-[1000] text-[2.9vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18.5px] flex justify-center items-center w-screen select-none">
        <div className="flex justify-center items-center bg-white/60 backdrop-blur-md rounded m-0 mr-[1.8vw] sm:mr-3 w-[18vw] h-[7.9vw] sm:w-[6rem] sm:h-[2.35rem] md:w-[6.5rem] md:h-[2.4rem] lg:w-[7.5rem] lg:h-[2.6rem] select-none ">
          <Link href="/" passHref scroll={false}>
            <a className="thumbcursor">
              <img
                src="/logoShort.png"
                alt="logo"
                className="w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[93px] h-auto"
              />
            </a>
          </Link>
        </div>

        <div
          style={{ transform: `rotate(${angle}deg)` }}
          className={
            "duration-75 bg-white/60 backdrop-blur-md rounded p-[1.5vw] pl-0 pr-0 sm:p-[0.45rem] sm:pl-1 sm:pr-1 "
          }
        >
          <Link href="/work" passHref scroll={false}>
            <a
              className={`inline-block hover:rotate-[3deg]  p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s]  hover:opacity-100
              ${
                router.pathname.includes("/work")
                  ? "opacity-100 rotate-[3deg] "
                  : "opacity-50"
              }`}
              onMouseEnter={() => {
                setAngle("-1.2");
              }}
            >
              <span className="p-1.5 pr-[0vw] pl-[3vw] sm:pr-3 sm:pl-3 ">
                Work
              </span>
            </a>
          </Link>

          <Link href="/realgoodfriends" passHref scroll={false}>
            <a
              className={`inline-block p-[0.3vw] hover:rotate-[2deg] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor   hover:opacity-100 duration-[0.2s] 
            ${
              router.pathname.includes("/realgoodfriends")
                ? "opacity-100 rotate-[2deg] "
                : "opacity-50"
            }`}
              onMouseEnter={() => {
                setAngle("-0.9");
              }}
            >
              <span className={`p-1.5  pr-[0vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
                Friends
              </span>
            </a>
          </Link>

          <Link href="/shop" passHref scroll={false}>
            <a
              className={`inline-block p-[0.3vw] hover:rotate-[-3deg] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor   hover:opacity-100 duration-[0.2s] 
            ${
              router.pathname.includes("/shop")
                ? "opacity-100 rotate-[-3deg] "
                : "opacity-50"
            }`}
              onMouseEnter={() => {
                setAngle("-0.4");
              }}
            >
              <span className={`p-1.5  pr-[0vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
                Shop
              </span>
            </a>
          </Link>

          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
            className={`inline-block hover:rotate-[2deg] p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s] opacity-50 hover:opacity-100
           `}
            onMouseEnter={() => {
              setAngle("0.4");
            }}
          >
            <span className={`p-1.5 pr-[0vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
              Instagram
            </span>
          </a>

          <Link href="/contact" passHref scroll={false}>
            <a
              onMouseEnter={() => {
                setAngle("0.9");
              }}
              className={`inline-block hover:rotate-[-4deg] p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s] hover:opacity-100 
              ${
                router.pathname.includes("/contact")
                  ? "opacity-100 rotate-[-4deg] "
                  : "opacity-50"
              } `}
            >
              <span className={`p-1.5 pr-[0vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
                Contact
              </span>
            </a>
          </Link>

          <div
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
            className={`inline-block hover:rotate-[3deg] p-[0.3vw] sm:p-0 sm:pl-1 sm:pr-0.5  thumbcursor  hover:opacity-100  ${
              cartOpen ? "opacity-100" : "opacity-50"
            }`}
            onMouseEnter={() => {
              setAngle("1.4");
            }}
          >
            <span className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3`}>
              Cart{" "}
              <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-0.4vw] sm:m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
                ({cartQuantity})
              </span>
            </span>
          </div>
          <MiniCart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Nav;
