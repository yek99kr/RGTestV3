import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../../context/shopContext";
import { formatter } from "../../utils/helpers";

// export default function MiniCart({ cart }) {
//   const cancelButtonRef = useRef();

//   const {
//     cartOpen,
//     setCartOpen,
//     checkoutUrl,
//     removeCartItem,
//     clearCart,
//     cartLoading,
//     incrementCartItem,
//     decrementCartItem,
//   } = useContext(CartContext);

//   let cartTotal = 0;

//   cart.map((item) => {
//     cartTotal += item?.variantPrice * item?.variantQuantity;
//   });

//   return (
//     <Transition.Root show={cartOpen} as={Fragment}>
//       <Dialog
//         initialFocus={cancelButtonRef}
//         as="div"
//         className="inset-0 overflow-hidden"
//         onClose={() => {
//           setCartOpen(false);
//         }}
//       >
//         <div className="inset-0 overflow-hidden ">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-in-out duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in-out duration-500"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
//           </Transition.Child>

//           <div className="fixed inset-y-0 right-0 lg:pl-10 max-w-full flex pointer-events-none z-[1000]">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-1000 sm:duration-1000"
//               enterFrom="translate-x-[100vw]"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-1000 sm:duration-1000"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-[100vw]"
//             >
//               <div className="relative flex justify-center items-center w-screen  lg:block lg:left-[-1.5vw] lg:w-[400px]">
//                 <div className="h-full flex flex-col overflow-y-scroll">
//                   <div className="flex-1 py-[6vw] sm:py-[4vw] lg:py-6 overflow-y-auto">
//                     <div className="flex items-start justify-between ">
//                       <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
//                       <div className="ml-3 h-7 flex items-center">
//                         <button
//                           ref={cancelButtonRef}
//                           type="button"
//                           className=" text-gray-400 hover:text-gray-500 bg-white/60 backdrop-blur-md rounded px-1 py-1 thumbcursor hidden lg:block pointer-events-auto"
//                           onClick={() => setCartOpen(false)}
//                           style={{ transition: "0.3s" }}
//                         >
//                           <span className="sr-only">Close panel</span>
//                           <RiCloseFill className="h-6 w-6" />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="mt-5">
//                       <div className="flow-root pointer-events-auto">
//                         {cart.length > 0 ? (
//                           <>
//                             <ul
//                               role="list"
//                               className="divide-y divide-gray-200"
//                             >
//                               {cart.map((product) => (
//                                 <li
//                                   key={product.id + Math.random()}
//                                   className="py-3 flex bg-white/60 backdrop-blur-md rounded px-4 mb-5"
//                                 >
//                                   <div
//                                     className={`relative flex-shrink-0 w-[14vw] h-[14vw] md:w-12 md:h-12 rounded `}
//                                   >
//                                     <Image
//                                       src={product.image}
//                                       alt={product.title}
//                                       layout="fill"
//                                       objectFit="cover"
//                                     />
//                                   </div>

//                                   <div className="ml-4 flex-1 flex flex-col">
//                                     <div>
//                                       <div className="flex justify-between text-[2.9vw] sm:text-sm md:text-base font-medium text-gray-900">
//                                         <h3>
//                                           <Link
//                                             href={`/shop/${product.handle}`}
//                                             passHref
//                                           >
//                                             <a
//                                               className="thumbcursor"
//                                               onClick={() => setCartOpen(false)}
//                                             >
//                                               {product.title}
//                                             </a>
//                                           </Link>
//                                         </h3>
//                                         <p className="ml-4">
//                                           {formatter.format(
//                                             product.variantPrice
//                                           )}
//                                         </p>
//                                       </div>
//                                       <p className="mt-1 text-xs text-gray-500">
//                                         {product.variantTitle}
//                                       </p>
//                                     </div>
//                                     <div className="flex-1 pt-1 flex items-end justify-between text-xs">
//                                       <div className={`border`}>
//                                         <button
//                                           className="px-2 thumbcursor"
//                                           onClick={() =>
//                                             decrementCartItem(product)
//                                           }
//                                           disabled={cartLoading}
//                                         >
//                                           -
//                                         </button>
//                                         <span className="px-2 border-l border-r">
//                                           {product.variantQuantity}
//                                         </span>
//                                         <button
//                                           className="px-2 thumbcursor"
//                                           onClick={() =>
//                                             incrementCartItem(product)
//                                           }
//                                           disabled={cartLoading}
//                                         >
//                                           +
//                                         </button>
//                                       </div>

//                                       <div className="flex">
//                                         <button
//                                           onClick={() =>
//                                             removeCartItem(product.id)
//                                           }
//                                           type="button"
//                                           className="font-medium thumbcursor text-gray-500 hover:text-gray-800"
//                                           disabled={cartLoading}
//                                         >
//                                           Remove
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </li>
//                               ))}
//                             </ul>
//                             {cart.length > 0 ? (
//                               <div className="py-2 sm:px-0">
//                                 <div className=" bg-white/60 backdrop-blur-md rounded px-5 py-3">
//                                   <div className="flex justify-between text-[2.9vw] sm:text-sm md:text-base font-medium text-gray-900">
//                                     <p>Subtotal</p>
//                                     <p>{formatter.format(cartTotal)}</p>
//                                   </div>
//                                   <p className="mt-0.5 text-xs text-gray-500">
//                                     Shipping and taxes calculated at checkout.
//                                   </p>
//                                 </div>

//                                 <div className=" mt-4 ">
//                                   <a
//                                     href={checkoutUrl}
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className={`flex justify-center items-center px-3 py-2 rounded text-[2.9vw] sm:text-sm md:text-base text-gray-900 font-medium bg-white/60 backdrop-blur-md thumbcursor ${
//                                       cartLoading
//                                         ? "cursor-not-allowed"
//                                         : "thumbcursor"
//                                     }`}
//                                   >
//                                     Checkout
//                                   </a>
//                                 </div>
//                               </div>
//                             ) : null}
//                           </>
//                         ) : (
//                           <div
//                             className="thumbcursor px-3 py-2 rounded bg-white/60 backdrop-blur-md pointer-events-auto text-[2.9vw] sm:text-sm md:text-base font-medium text-gray-900 "
//                             onClick={() => setCartOpen(false)}
//                           >
//                             <p>Nothing in your cart!</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const {
    cartOpen,
    setCartOpen,
    checkoutUrl,
    removeCartItem,
    clearCart,
    cartLoading,
    incrementCartItem,
    decrementCartItem,
  } = useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <>
      <Transition.Root show={cartOpen} as={Fragment}>
        <Dialog
          initialFocus={cancelButtonRef}
          as="div"
          className="fixed inset-0 z-[100] overflow-hidden"
          onClose={() => {
            setCartOpen(!cartOpen);
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            // onClick={() => setCartOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity" />
            </Transition.Child>

            {/* flex justify-center items-center w-screen  lg:block  */}

            <div className="fixed inset-y-0 lg:right-0 flex lg:max-w-full lg:pl-10 overflow-x-hidden">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen lg:max-w-[430px] overflow-x-hidden">
                  <div
                    className="absolute w-full h-full z-[0] "
                    onClick={() => setCartOpen(false)}
                  ></div>
                  <div className="flex flex-col h-full overflow-x-hidden overflow-y-scrol items-center lg:items-stretch">
                    <div className="flex-1 px-4 py-6 overflow-x-hidden overflow-y-auto sm:px-6">
                      <div className="flex-1 lg:block w-[97vw] sm:w-[520px] md:w-[570px] lg:w-[400px] mt-[7vw] sm:mt-[2.3rem] lg:mt-0">
                        <div className="flow-root">
                          <div className="hidden lg:flex place-content-end mr-3 h-8 lg:mb-5">
                            <button
                              ref={cancelButtonRef}
                              type="button"
                              className="text-gray-400 hover:text-gray-500 bg-white/60 backdrop-blur-md rounded px-1 py-1 thumbcursor hidden lg:block "
                              onClick={() => setCartOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <RiCloseFill
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          {cart.length > 0 ? (
                            <ul role="list" className="-my-1">
                              {cart.map((product) => (
                                <li
                                  key={product.id + Math.random()}
                                  className="relative flex py-4 bg-white/60 backdrop-blur-md rounded pl-5 pr-5 m-[2.3vw] sm:m-3 mt-[4vw] sm:mt-5"
                                >
                                  <div
                                    className={`top-0 left-0 right-0 z-1000 w-full h-full absolute ${
                                      cartLoading
                                        ? "bg-white opacity-60"
                                        : "hidden"
                                    }`}
                                  ></div>
                                  <div className="relative flex-shrink-0 w-[14vw] h-[14vw] md:w-12 md:h-12 overflow-hidden rounded ">
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      layout="fill"
                                      objectFit="cover"
                                    />
                                  </div>

                                  <div className="flex flex-col flex-1 ml-4">
                                    <div>
                                      <div className="flex justify-between text-[2.9vw] sm:text-sm md:text-base text-gray-900">
                                        <h3>
                                          <Link
                                            href={`/products/${product.handle}`}
                                            passHref
                                          >
                                            <a
                                              className="thumbcursor"
                                              onClick={() => setCartOpen(false)}
                                            >
                                              {product.title}
                                            </a>
                                          </Link>
                                        </h3>
                                        <p className="ml-4 ">
                                          {formatter.format(
                                            product.variantPrice
                                          )}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-[2.4vw] sm:text-xs md:text-sm text-gray-500  ">
                                        {product.variantTitle}
                                      </p>
                                    </div>
                                    <div className="flex items-end justify-between flex-1 text-[2.9vw] sm:text-sm md:text-base">
                                      <div className={`border`}>
                                        <button
                                          className="px-2 thumbcursor"
                                          onClick={() =>
                                            decrementCartItem(product)
                                          }
                                          disabled={cartLoading}
                                        >
                                          -
                                        </button>
                                        <span className="px-2 border-l border-r">
                                          {product.variantQuantity}
                                        </span>
                                        <button
                                          className="px-2 thumbcursor"
                                          onClick={() =>
                                            incrementCartItem(product)
                                          }
                                          disabled={cartLoading}
                                        >
                                          +
                                        </button>
                                      </div>
                                      <div className="flex text-[2.6vw] sm:text-xs md:text-sm">
                                        <button
                                          onClick={() =>
                                            removeCartItem(product.id)
                                          }
                                          type="button"
                                          className="text-gray-500 hover:text-gray-800 thumbcursor"
                                          disabled={cartLoading}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                              <div className="mt-6  m-[2.3vw] sm:m-3  bg-white/60 backdrop-blur-md rounded px-3 py-3">
                                <div className="flex p-1 justify-between text-[2.9vw] sm:text-sm md:text-base  text-gray-900">
                                  <p>Subtotal</p>
                                  <p>{formatter.format(cartTotal)}</p>
                                </div>
                                <p className="p-1 text-gray-500 text-[2.5vw] sm:text-xs md:text-xs">
                                  Shipping and taxes calculated at checkout.
                                </p>
                              </div>

                              <div className="mt-6   m-[2.3vw] sm:m-3">
                                <a
                                  href={checkoutUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={`flex items-center justify-center px-6 py-3 text-[2.9vw] sm:text-sm md:text-base  bg-white/60 backdrop-blur-md rounded thumbcursor ${
                                    cartLoading
                                      ? "cursor-not-allowed"
                                      : "cursor-pointer"
                                  }`}
                                >
                                  Checkout
                                </a>
                              </div>
                            </ul>
                          ) : (
                            <div
                              className="thumbcursor rounded m-[2.5vw] sm:m-3 p-[2.5vw] sm:p-3 bg-white/60 backdrop-blur-md text-[2.9vw] sm:text-sm md:text-base"
                              onClick={() => setCartOpen(false)}
                            >
                              <p>Nothing in your cart!</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <style jsx>{`
 @media only screen and (max-width: 1024px) {
  div {
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`}</style>
    </>
  );
}

{
  /* <style jsx>{`
 @media only screen and (max-width: 1024px) {
  div {
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`}</style> */
}
