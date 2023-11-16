import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";
import ProductThumbnailDesktop from "./ProductThumbnailDesktop";
import ProductThumbnailMobile from "./ProductThumbnailMobile";

const ProductList = ({ products }) => {
  const isSmallestHeight = useMediaQueryWidth(768);
  const isTouch = useIsTouch();
  const mouseAnimation = isSmallestHeight || isTouch;

  const classes = [
    "md:mt-[2vw] md:rotate-[0deg] md:col-start-1 md:top-[-20px]",
    "md:mt-[6vw] md:rotate-[-8deg] md:col-start-3",
    "md:mt-[0vw] md:rotate-[9deg] md:col-start-5 ",

    "md:mt-[-5vw] md:rotate-[3deg] md:col-start-2 md:-ml-[13rem] md:top-[-20px]",
    "md:mt-[-3vw] md:rotate-[-4deg] md:col-start-4 md:-mr-[10rem] md:top-[-30px]",
  ];
  return (
    <div className="mx-auto py-16 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] ">
      <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
        {products.map((product, i) => (
          <div
            className={`relative ${
              classes[i % classes.length]
            } mb-1 md:mb-20 justify-self-center `}
            key={product.node.id}
          >
            {!mouseAnimation ? (
              <ProductThumbnailDesktop product={product} size={40} />
            ) : (
              <ProductThumbnailMobile product={product} />
            )}
          </div>
        ))}
      </div>
    </div>
    // <div className="md:w-[90vw] w-[100vw] h-[100vh] text-[4vw] 4xs:text-[4vw] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px]">
    //   {/* <div className="mx-auto py-16 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] "> */}
    //   <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
    //     {products.map((product, i) => (
    //       <div
    //         className={`relative ${
    //           classes[i % classes.length]
    //         } mb-1 md:mb-20 justify-self-center`}
    //         key={product.node.id}
    //       >
    //         {!mouseAnimation ? (
    //           <ProductThumbnailDesktop product={product} size={24} />
    //         ) : (
    //           <ProductThumbnailMobile product={product} />
    //         )}
    //       </div>
    //     ))}
    //   </div>

    // </div>
  );
};

export default ProductList;
