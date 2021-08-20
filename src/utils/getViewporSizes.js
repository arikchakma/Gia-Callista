/**
 * getViewportSizes - Provide you client's viewport sizes
 * @returns an Object of width(x) & height(y)
 */

export default function getViewportSizes() {
  //  Viewport height
  const x =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  //  Viewport width
  const y =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return {
    x,
    y,
  };
}
