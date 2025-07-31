import { useEffect, useState } from "react";

export default function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isSmall;
}
