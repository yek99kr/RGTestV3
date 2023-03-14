import { useState, useEffect } from "react";

const useResize = () => {
  const [isLarge, setIsLarge] = useState(true);

  useEffect(() => {
    const onResize = () => {
      setIsLarge(() => window.innerWidth <= 1000);
      console.log(isLarge);
    };

    window.addEventListener("resize", () => {
      setIsLarge(window.innerWidth <= 1000);
      console.log(isLarge);
    });

    if (typeof window !== "undefined") {
      function handleResize() {
        setIsLarge(() => window.innerWidth <= 1000);
      }
    }

    return () => {
      window.removeEventListener("resize", () =>
        setIsLarge(window.innerWidth <= 1000)
      );
    };
  }, []);

  return isLarge;
};

export default useResize;
