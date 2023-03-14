import Link from "next/link";
import LoadImage from "../LoadImage";
import { formatter } from "../../utils/helpers";

const ProductThumbnailMobile = ({ product }) => {
  const { handle, title } = product.node;

  const price = product.node.priceRange.minVariantPrice.amount;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        {
          <div className="w-full overflow-hidden">
            <div className="relative w-[80vw] h-[80vw] mt-5 md:mt-0 md:w-[24vw] md:h-[24vw] xl:w-[23vw] xl:h-[23vw]">
              <LoadImage
                src={originalSrc}
                // alt={project.data.mobileThumbnail.alt}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        }

        <div className="block mt-4">
          <p className=" text-center  text-[4.2vw] md:text-xl lg:text-2xl">
            {title}
          </p>
          <p className=" text-center  text-[3.5vw] md:text-base lg:text-lg m-[-0.1rem]">
            {formatter.format(price)}
          </p>
        </div>

        {/* <div className="block">
          <h1 className="mt-0.5 center text-center text-[2.9vw] sm:text-xl">
            {title}
          </h1>
          <p className=" text-center  text-[2.9vw] sm:text-xl">
            Real Good X Person
          </p>
          <p className=" text-center text-[4.2vw] sm:text-2xl">
            {formatter.format(price)}
          </p>
        </div> */}
      </a>
    </Link>
  );
};

export default ProductThumbnailMobile;
