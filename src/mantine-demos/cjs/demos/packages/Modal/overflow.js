'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// (default) \u2013 overflow is handled by modal wrapper
<Modal overflow="outside" />

// overflow is handled by modal body
<Modal overflow="inside" />
`;
function Demo() {
  const [insideOpened, setInsideOpened] = React.useState(false);
  const [outsideOpened, setOutsideOpened] = React.useState(false);
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement("p", {
    key: index
  }, "React is not a framework"));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened: outsideOpened,
    onClose: () => setOutsideOpened(false),
    title: "Please consider this",
    overflow: "outside"
  }, content), /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened: insideOpened,
    onClose: () => setInsideOpened(false),
    title: "Please consider this",
    overflow: "inside"
  }, content), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOutsideOpened(true),
    color: "pink"
  }, "Outside overflow"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setInsideOpened(true),
    color: "cyan"
  }, "Inside overflow")));
}
const overflow = {
  type: "demo",
  component: Demo,
  code
};

exports.overflow = overflow;
//# sourceMappingURL=overflow.js.map
