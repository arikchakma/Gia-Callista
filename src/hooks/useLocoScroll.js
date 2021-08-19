import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll(element, speed = 1) {
  // Getting the scroll container or main componenet
  const Element = element ? element : document.querySelector(".smooth-scroll");
  const SmoothEl = element ? element : ".smooth-scroll";

  // Writing the logic
  const locoScroll = new LocomotiveScroll({
    el: Element,
    smooth: true,
    multiplier: speed,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(SmoothEl, {
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
        height: window.innerHeight,
      };
    },
  });

  return locoScroll;
}
