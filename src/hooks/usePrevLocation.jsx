import { useEffect, useRef } from "react";

export function usePrevLocation(location) {
  const prevLocRef = useRef(location);

  useEffect(() => {
    prevLocRef.current = location;
  }, [location]);

  return prevLocRef.current;
}
