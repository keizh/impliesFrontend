import { useState, useEffect, useRef } from "react";

const useDebounce = (value, CB, delay = 1000) => {
  const [d, setD] = useState(value);
  const timer = useRef(null);

  useEffect(() => {
    if (value || value != d) {
      timer.current = setTimeout(() => {
        setD(value);
        CB(value);
      }, delay);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, [value]);

  return d;
};

export default useDebounce;
