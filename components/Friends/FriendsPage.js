// import DragBackground from "./DragBackground";
import Friends from "./Friends";

// import useMediaQueryHeight from "../../utils/useMediaQueryHeight";
// import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
// import useIsTouch from "../../utils/useIsTouch";

const FriendsPage = ({ router }) => {
  // const isSmallerWidth = useMediaQueryWidth(638);
  // const isSmallerHeight = useMediaQueryHeight(550);
  // const isSmallestHeight = useMediaQueryHeight(349);

  return (
    <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
      {/* {isSmallestHeight || (!isSmallerWidth && isSmallerHeight) ? null : <Ad />} */}

      <Friends router={router} />
    </div>
  );
};

export default FriendsPage;
