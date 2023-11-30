import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";
import ProductThumbnailDesktop from "./ProductThumbnailDesktop";
import ProductThumbnailMobile from "./ProductThumbnailMobile";

const ProductList = ({ products }) => {
  const isSmallestHeight = useMediaQueryWidth(768);
  const isTouch = useIsTouch();
  const mouseAnimation = isSmallestHeight || isTouch;

  const classes = [
    "md:mt-[2vw] md:rotate-[5deg] md:col-start-1 md:top-[-0px]",
    "md:mt-[5vw] md:rotate-[-8deg] md:col-start-3",
    "md:mt-[3vw] md:rotate-[-2deg] md:col-start-5 ",

    "md:mt-[-2vw] md:rotate-[4deg] md:col-start-1 md:-ml-[1rem]",
    "md:mt-[4vw] md:rotate-[-4deg] md:col-start-3 md:-mr-[0rem]",
    "md:mt-[-4vw] md:rotate-[2deg] md:col-start-5 ",
  ];
  return (
    <div className="mx-auto py-10 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] ">
      <div className="grid grid-cols-1 md:gap-x-1 md:grid-cols-5">
        {products.map((product, i) => (
          <div
            className={`relative ${
              classes[i % classes.length]
            } mb-1 md:mb-16 justify-self-center `}
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
  );
};

export default ProductList;
