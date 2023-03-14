import Image from "next/image";
// import { useState } from "react";
// import cn from "clsx";

function LoadImage(props) {
  // const [isLoading, setLoading] = useState(true);
  // console.log(props.src);

  return (
    <Image
      {...props}
      // blurDataURL="/images/path-to-blur-image.jpg"
      placeholder="blur"
      blurDataURL={`/_next/image?url=${props.src}&w=16&q=1`}
    />
    // <Image
    //   {...props}
    //   className={cn(
    //     props.className,
    //     "duration-50",
    //     isLoading ? "blur-md" : "blur-0"
    //   )}
    //   // blurDataURL="/images/path-to-blur-image.jpg"
    //   // placeholder="blur"
    //   onLoadingComplete={() => setLoading(false)}
    // />
  );
}

export default LoadImage;
