import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const element = useRef(null);
  const [isView, setIsView] = useState(0);

  const ElementIsView = (elem) => {
    if (!isView) {
      const [entry] = elem;
      setIsView(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(ElementIsView, options);
    if (element.current) observer.observe(element.current);
    if (isView) observer.disconnect(element.current);
    return () => {
      if (element.current) observer.unobserve(element.current);
    };
  }, [element, isView]);

  return { element, isView };
};

export default useElementOnScreen;
