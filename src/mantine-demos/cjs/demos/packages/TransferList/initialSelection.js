'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TransferList initialSelection={[['react', 'ng'], []]} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    initialSelection: [["react", "ng"], []]
  });
}
const initialSelection = {
  type: "demo",
  component: Demo,
  code
};

exports.initialSelection = initialSelection;
//# sourceMappingURL=initialSelection.js.map
