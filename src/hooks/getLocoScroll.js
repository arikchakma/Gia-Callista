import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
/**
 * useLocoScroll - Help you to eneble smooth scrolling
 * @param {string | Object} element - The main scroll container
 * @param {number} speed - Smooth scroll speed
 */

export function getLocoScroll({ element, speed } = { speed: 1 }) {
  let Element;

  // Guard clause
  if (typeof element === "string") {
    Element = document.querySelector(element);
  } else {
    Element = element || document.querySelector(".smooth-scroll");
  }

  // Getting the scroll container or main componenet
  const ElementEl = element ? element.className : ".smooth-scroll";

  // Writing the logic
  const locoScroll = new LocomotiveScroll({
    el: Element,
    smooth: true,
    multiplier: speed,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(ElementEl, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });

  return locoScroll;
}
