import { useState, useCallback, useEffect } from "react";

const useMediaQueryHeight = (height) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-height: ${height}px)`);

    try {
      media.addEventListener("change", updateTarget);
    } catch (e1) {
      try {
        media.addListener("change", updateTarget);
      } catch (e2) {}
    }

    if (media.matches) {
      setTargetReached(true);
    }

    return () => {
      try {
        media.removeEventListener("change", updateTarget);
      } catch (e1) {
        try {
          media.removeListener("change", updateTarget);
        } catch (e2) {}
      }
    };
  }, []);

  return targetReached;
};

export default useMediaQueryHeight;

// const useMediaQueryHeight = (height) => {
//   const [targetReached, setTargetReached] = useState(false);

//   const updateTarget = useCallback((e) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-height: ${height}px)`);

//     media.addEventListener("change", updateTarget);

//     if (media.matches) {
//       setTargetReached(true);
//     }

//     return () => media.removeEventListener("change", updateTarget);
//   }, []);

//   return targetReached;
// };

// export default useMediaQueryHeight;
