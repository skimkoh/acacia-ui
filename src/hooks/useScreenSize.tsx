import { useState, useEffect } from "react";

export const useScreenSize = (debounceTime = 200) => {
  let timeout: ReturnType<typeof setTimeout> | null;

  const [screenSize, setScreenSize] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (typeof window !== "undefined") {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      }, debounceTime);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
