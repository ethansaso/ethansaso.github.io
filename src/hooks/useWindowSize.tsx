import { useEffect, useState } from "react";

interface WindowSize {
    width: number;
    height: number;
}

const useWindowSize = (): WindowSize => {
    const [height, setHeight] = useState(
      typeof window !== 'undefined' ? window.innerHeight : 0
    );
    const [width, setWidth] = useState(
      typeof window !== 'undefined' ? window.innerHeight : 0
    );
  
    useEffect(() => {
      const onResize = () => {setWidth(window.innerWidth); setHeight(window.innerHeight)};
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);
  
    return {width, height};
}

export default useWindowSize;