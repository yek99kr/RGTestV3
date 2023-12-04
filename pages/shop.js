import { motion } from "framer-motion";
import ProductList from "../components/Shop/ProductList";
import { createClient } from "../prismicio";
import { getProductsInCollection } from "../lib/shopify";

export async function getStaticProps({ params, previewData }) {
  const products = await getProductsInCollection();

  const client = createClient({ previewData });

  const productThumbnails = await client.getAllByType("shop", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });
  return {
    props: { products, productThumbnails },
  };
}

const store = ({ router, products, productThumbnails }) => {
  return (
    <>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ProductList
          products={products}
          productThumbnails={productThumbnails}
        />
      </motion.div>
    </>
  );
};

export default store;
