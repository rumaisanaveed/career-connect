import { useEffect, useState } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const isSmallDesktop = screenSize > 1024;

  return { screenSize, isSmallDesktop };
}
export default useScreenSize;
