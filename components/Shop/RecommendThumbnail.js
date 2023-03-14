import Link from "next/link";
import Image from "next/image";
import { formatter } from "../../utils/helpers";

const RecommendThumbnail = ({ product }) => {
  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div className="overflow-hidden thumbcursor">
          <div className="relative sm:ml-0 w-[43vw] h-[43vw] lg:w-[21vw] lg:h-[21vw] select-none">
            <Image
              src={originalSrc}
              objectFit="cover"
              alt={altText}
              layout="fill"
              placeholder="blur"
              priority={true}
              blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecommendThumbnail;
