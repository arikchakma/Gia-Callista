import { useState, useEffect } from "react";

/**
 * useMousePosition hook
 * @returns - an Object of mouse movements
 */

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    // Mouse Position
    x: null,
    y: null,

    // Difference between previous mouse position and current mouse position
    movementX: null,
    movementY: null,
  });

  useEffect(() => {
    function handle(event) {
      setMousePosition({
        // Mouse Position
        x: event.pageX,
        y: event.pageY,

        // Difference between previous mouse position and current mouse position
        movementX: event.movementX,
        movementY: event.movementY,
      });
    }

    // MouseMove event listener to update mouseposition on mouse move
    document.addEventListener("mousemove", handle);

    // Cleaning up mouse event whenever unmounted
    return () => document.removeEventListener("mousemove", handle);
  });

  // Returning the object
  return mousePosition;
}
