import { RefObject, useEffect, useState } from "react";

const useScrollPosition = (ref?: RefObject<HTMLDivElement | null>): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const target: Window | HTMLDivElement = ref?.current ?? window;
    const onScroll = () => {
      if (target instanceof Window) {
        setScrollPosition(target.pageYOffset);
      } else {
        setScrollPosition(target.scrollTop);
      }
    };

    target.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    
    return () => {
      target.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return scrollPosition;
};
  
export default useScrollPosition;