import React, { useEffect, useRef, useState } from 'react';

const useOutObserver = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isOut, setIsOut] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect();
        const isOut = boundingRect.top > window.innerHeight ||
          boundingRect.bottom < 0 ||
          boundingRect.left > window.innerWidth ||
          boundingRect.right < 0;

        setIsOut(isOut);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [ref, isOut];
};

export { useOutObserver };