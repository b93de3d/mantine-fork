'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var size = require('../size/size.js');

function largerThan(theme) {
  return (breakpoint) => `@media (min-width: ${size.size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}
function smallerThan(theme) {
  return (breakpoint) => `@media (max-width: ${size.size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}

exports.largerThan = largerThan;
exports.smallerThan = smallerThan;
//# sourceMappingURL=breakpoints.js.map
