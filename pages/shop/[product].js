import { getAllProducts, getProduct } from "../../lib/shopify";
import ProductDetail from "../../components/Shop/ProductDetail";
import { motion } from "framer-motion";

const product = ({ router, product }) => {
  return (
    <motion.div
      key={router.route}
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 100 }}
      // transition={{ duration: 0.5 }}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ delay: 0, default: { duration: 0.5 } }}
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          opacity: 0,
        },
      }}
      className="overflow-hidden"
    >
      <ProductDetail product={product} />
    </motion.div>
  );
};

export default product;

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);
    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
