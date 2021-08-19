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
