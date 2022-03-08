'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function parsePopperPosition(position) {
  if (typeof position !== "string") {
    return { position: "top", placement: "center" };
  }
  const splitted = position.split("-");
  if (splitted.length === 1) {
    return { position, placement: "center" };
  }
  return { position: splitted[0], placement: splitted[1] };
}

exports.parsePopperPosition = parsePopperPosition;
//# sourceMappingURL=parse-popper-position.js.map
