import { motion } from "framer-motion";

const store = ({ router }) => {
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
        className="fixed overflow-hidden w-[100vw] h-[100vw]"
      >
        <div className="md:w-[90vw] w-[100vw] h-[100vh] text-[4vw] 4xs:text-[4vw] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px]">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] font-bold ">
            <span className="wiggle1 text-pink-500">c</span>
            <span className="wiggle2 text-sky-400">o</span>
            <span className="wiggle3 text-yellow-500">m</span>
            <span className="wiggle4 text-purple-500">i</span>
            <span className="wiggle5 text-green-500">n</span>
            <span className="wiggle6 text-pink-500">g</span>{" "}
            <span className="wiggle7 text-sky-400">s</span>
            <span className="wiggle8 text-yellow-500">o</span>
            <span className="wiggle9 text-purple-500">o</span>
            <span className="wiggle1 text-pink-500">n</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default store;
