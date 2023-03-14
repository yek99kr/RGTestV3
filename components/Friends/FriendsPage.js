import Ad from "../Home/Ad";
// import DragBackground from "./DragBackground";
import Friends from "./Friends";
import { motion } from "framer-motion";
// import useMediaQueryHeight from "../../utils/useMediaQueryHeight";
// import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
// import useIsTouch from "../../utils/useIsTouch";

const FriendsPage = ({ router }) => {
  // const isSmallerWidth = useMediaQueryWidth(638);
  // const isSmallerHeight = useMediaQueryHeight(550);
  // const isSmallestHeight = useMediaQueryHeight(349);

  return (
    <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
      {/* {isSmallerHeight || isSmallerWidth || isTouch ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )} */}

      {/* {isSmallestHeight || (!isSmallerWidth && isSmallerHeight) ? null : <Ad />} */}

      <Friends router={router} />
    </div>
  );
};

export default FriendsPage;
