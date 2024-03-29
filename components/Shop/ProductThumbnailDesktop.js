import Link from "next/link";
import { useState } from "react";
import { formatter } from "../../utils/helpers";
import Image from "next/image";
import MouseAnimation from "../MouseAnimation";

const ProductThumbnailDesktop = ({ product, size }) => {
  const [hovered, setHovered] = useState(false);

  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  // const thumbnails = productThumbnails.data.Thumbnails.map((url) => {
  //   return url.thumbnail.url;
  // });
  // console.log(productThumbnails);

  console.log(handle);

  const thumbnails = [
    `/shop/${handle}/1.webp`,
    `/shop/${handle}/2.webp`,
    `/shop/${handle}/3.webp`,
    `/shop/${handle}/4.webp`,
    `/shop/${handle}/5.webp`,
  ];

  // `/${folder}/${image}/test0.webp`

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div
          className="w-full overflow-hidden "
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <div
            className={`relative md:w-[38vw] md:h-[38vw] lg:w-[34vw] lg:h-[34vw] xl:w-[27vw] xl:h-[27vw]`}
          >
            <MouseAnimation thumbnails={thumbnails} defaultThumbnail={2} />

            {/* <Image
              src={originalSrc}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
            /> */}
          </div>
        </div>

        <div
          className={`opacity-0 ${
            hovered ? "md:opacity-100" : "md:opacity-0"
          } `}
          style={{ transition: "opacity 0.2s" }}
        >
          <p className="text-center md:text-xl lg:text-2xl m-[-0.1rem]">
            {/* <span className="bg-black text-white p-1"> */}
            {title}
            {/* </span> */}
          </p>
          <p className="text-center md:text-base lg:text-lg m-[0rem]">
            {/* <span className="bg-black text-white p-1"> */}{" "}
            {formatter.format(price)}
            {/* </span> */}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProductThumbnailDesktop;

// <Link href={`/shop/${handle}`} passHref scroll={false}>
//   <a className="group thumbcursor">
//     <div
//       className="thumbcursor"
//       onMouseOver={() => {
//         setHovered(true);
//       }}
//       onMouseLeave={() => {
//         setHovered(false);
//       }}
//     >
//       <div className="relative ml-[5vw] sm:ml-0 w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] xl:w-[26vw] xl:h-[26vw] select-none">
//         <Image
//           src={url}
//           objectFit="cover"
//           alt={altText}
//           layout="fill"
//           placeholder="blur"
//           priority={true}
//           blurDataURL={`/_next/image?url=${url}&w=16&q=1`}
//         />

//         {hovered && (
//           <div className="absolute left-1/2 top-1/2 translate-x-[-50%] bg-white">
//             <h1 className="text-sm center text-center hidden lg:block ">
//               {title}
//             </h1>
//             <p className="mt-1 text-sm text-center hidden lg:block">
//               {formatter.format(price)}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//     {/* <h1 className="mt-0.5 center text-center text-[2.5vw] sm:text-sm lg:hidden">
//       {title}
//     </h1>
//     <p className=" text-center  text-[2.9vw] sm:text-sm lg:hidden">
//       {formatter.format(price)}
//     </p> */}
//   </a>
// </Link>
