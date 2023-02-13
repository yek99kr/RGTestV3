import { motion } from "framer-motion";
import FriendsPage from "../components/Friends/FriendsPage";

const realgoodfriends = ({ router }) => {
  return (
    <>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ delay: 0.3, default: { duration: 0.7 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
        className="absolute top-0 w-[100vw] h-[100%] overflow-hidden"
      >
        <FriendsPage />
      </motion.div>
    </>
  );
};

export default realgoodfriends;
