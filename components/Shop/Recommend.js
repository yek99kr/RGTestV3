import RecommendThumbnail from "./RecommendThumbnail";

const Recommend = ({ products, current }) => {
  const notCurrent = products.filter((product, i) => {
    return product.node.id !== current;
  });

  const slicedArray = notCurrent.slice(0, 4);

  return (
    <>
      <div className="w-[90vw] sm:w-[90vw] lg:w-[85vw] mx-auto py-16 sm:py-24 lg:-mt-[1rem]">
        <h2 className=" text-[4vw] sm:text-2xl text-gray-900 mb-6">
          Other Products
        </h2>
        <div className="grid grid-cols-2 gap-y-3  md:grid-cols-2 lg:grid-cols-4">
          {slicedArray.map((product) => (
            <RecommendThumbnail key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommend;
