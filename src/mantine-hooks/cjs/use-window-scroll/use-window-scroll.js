'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var useWindowEvent = require('../use-window-event/use-window-event.js');

function getScrollPosition() {
  return typeof window !== "undefined" ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 };
}
function scrollTo({ x, y }) {
  if (typeof window !== "undefined") {
    const scrollOptions = { behavior: "smooth" };
    if (typeof x === "number") {
      scrollOptions.left = x;
    }
    if (typeof y === "number") {
      scrollOptions.top = y;
    }
    window.scrollTo(scrollOptions);
  }
}
function useWindowScroll() {
  const [position, setPosition] = react.useState(getScrollPosition());
  useWindowEvent.useWindowEvent("scroll", () => setPosition(getScrollPosition()));
  useWindowEvent.useWindowEvent("resize", () => setPosition(getScrollPosition()));
  return [position, scrollTo];
}

exports.useWindowScroll = useWindowScroll;
//# sourceMappingURL=use-window-scroll.js.map
