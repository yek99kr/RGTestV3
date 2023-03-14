import { motion } from "framer-motion";
import FriendsPage from "../components/Friends/FriendsPage";
// import Hands from "../components/Hands/Hands";
const realgoodfriends = ({ router }) => {
  return (
    <>
      {/* <Hands router={router} /> */}
      <motion.div
        className="absolute top-0 w-[100vw] h-[100%] overflow-hidden"
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
      >
        <FriendsPage router={router} />
      </motion.div>
    </>
  );
};

export default realgoodfriends;
