import { useState } from "react";
import LoadImage from "./LoadImage";
import cn from "clsx";

const MouseAnimation = ({ thumbnails }) => {
  const [moveImg, setMoveImg] = useState(0);

  return (
    <div
      className={`relative w-[100%] h-[100%]`}
      onMouseMove={(e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var percent = (rect.width * 20) / 100;

        if (thumbnails[1]) {
          if (moveImg !== 0 && x > 0 && x <= percent) {
            setMoveImg(0);
          } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
            setMoveImg(1);
          } else if (
            moveImg !== 2 &&
            x > rect.width - percent * 3 &&
            x <= rect.width - percent * 2
          ) {
            setMoveImg(2);
          } else if (
            moveImg !== 3 &&
            x > rect.width - percent * 2 &&
            x <= rect.width - percent
          ) {
            setMoveImg(3);
          } else if (
            moveImg !== 4 &&
            x > rect.width - percent &&
            x <= rect.width
          ) {
            setMoveImg(4);
          }
        }
      }}
    >
      <div className={cn(moveImg === 0 ? "block" : "hidden")}>
        <LoadImage
          src={thumbnails[0]}
          //   alt={thumbnails[0]}
          priority={true}
          loading="eager"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {thumbnails[1] && (
        <>
          <div className={cn(moveImg === 1 ? "block" : "hidden")}>
            <LoadImage
              src={thumbnails[1]}
              //   alt={image}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={cn(moveImg === 2 ? "block" : "hidden")}>
            <LoadImage
              src={thumbnails[2]}
              //   alt={image}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={cn(moveImg === 3 ? "block" : "hidden")}>
            <LoadImage
              src={thumbnails[3]}
              //   alt={image}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={cn(moveImg === 4 ? "block" : "hidden")}>
            <LoadImage
              src={thumbnails[4]}
              //   alt={image}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MouseAnimation;

// import { useState } from "react";
// import Image from "next/image";

// const MouseAnimation = ({ folder, image }) => {
//   const [moveImg, setMoveImg] = useState(0);

//   return (
//     <div
//       className="relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] md:w-[24vw] md:h-[24vw] xl:w-[21vw] xl:h-[21vw]"
//       onMouseMove={(e) => {
//         var rect = e.target.getBoundingClientRect();

//         var x = e.clientX - rect.left;

//         var percent = (rect.width * 20) / 100;

//         if (`/shop/test/test1.webp`) {
//           if (moveImg !== 0 && x > 0 && x <= percent) {
//             setMoveImg(0);
//           } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
//             setMoveImg(1);
//           } else if (
//             moveImg !== 2 &&
//             x > rect.width - percent * 3 &&
//             x <= rect.width - percent * 2
//           ) {
//             setMoveImg(2);
//           } else if (
//             moveImg !== 3 &&
//             x > rect.width - percent * 2 &&
//             x <= rect.width - percent
//           ) {
//             setMoveImg(3);
//           } else if (
//             moveImg !== 4 &&
//             x > rect.width - percent &&
//             x <= rect.width
//           ) {
//             setMoveImg(4);
//           }
//         }
//       }}
//     >
//       <div className={`${moveImg === 0 ? "block" : "hidden"}`}>
//         <Image
//           src={`/${folder}/${image}/test0.webp`}
//           alt={image}
//           priority={true}
//           loading="eager"
//           placeholder="blur"
//           blurDataURL={`/_next/image?url=/${folder}/${image}/test0.webp&w=16&q=1`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className={`${moveImg === 1 ? "block" : "hidden"}`}>
//         <Image
//           src={`/${folder}/${image}/test1.webp`}
//           alt={image}
//           priority={true}
//           loading="eager"
//           placeholder="blur"
//           blurDataURL={`/_next/image?url=/${folder}/${image}/test0.webp&w=16&q=1`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className={`${moveImg === 2 ? "block" : "hidden"}`}>
//         <Image
//           src={`/${folder}/${image}/test2.webp`}
//           alt={image}
//           priority={true}
//           loading="eager"
//           placeholder="blur"
//           blurDataURL={`/_next/image?url=/${folder}/${image}/test0.webp&w=16&q=1`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className={`${moveImg === 3 ? "block" : "hidden"}`}>
//         <Image
//           src={`/${folder}/${image}/test3.webp`}
//           alt={image}
//           priority={true}
//           loading="eager"
//           placeholder="blur"
//           blurDataURL={`/_next/image?url=/${folder}/${image}/test0.webp&w=16&q=1`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className={`${moveImg === 4 ? "block" : "hidden"}`}>
//         <Image
//           src={`/${folder}/${image}/test4.webp`}
//           alt={image}
//           priority={true}
//           loading="eager"
//           placeholder="blur"
//           blurDataURL={`/_next/image?url=/${folder}/${image}/test0.webp&w=16&q=1`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default MouseAnimation;
