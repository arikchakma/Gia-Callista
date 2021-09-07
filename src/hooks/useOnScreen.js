import { useEffect, useState } from "react";

/**
 * useOnScrren hook
 * @param {*} ref - Element which you want to observe, use useRef() hook for that.
 * @param {String} rootMargin
 * @returns - true or false
 */
function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    const currentElement = ref?.current;
    if (currentElement) observer.observe(currentElement);

    return () => observer.unobserve(currentElement);
  });

  return isVisible;
}

export default useOnScreen;
