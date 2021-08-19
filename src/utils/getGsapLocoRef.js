export default function getGsapLocoRef(loco) {
  ScrollTrigger.addEventListener("refresh", () => loco.update());
  ScrollTrigger.refresh();
}
