import { useEffect } from "react";

/**
 * useCustomMouse hook helps you to create a custom following mouse using react hooks
 * @param {*} cursorRef - Pass the reference using useRef() hook as arguments
 */
function useCustomMouse(cursorRef) {
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      // (cursorRef.current.clientWidth/clientHeight) / 2 - it will center our custom mouse to the original mouse
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      // Changing it's position with mousemove
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  });
}

export default useCustomMouse;
