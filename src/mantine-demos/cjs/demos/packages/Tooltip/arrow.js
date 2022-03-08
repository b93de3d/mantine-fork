'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tooltip label="Default arrow" withArrow opened>
  <Button variant="outline">Default arrow</Button>
</Tooltip>

<Tooltip label="Arrow with size" withArrow arrowSize={3} opened>
  <Button variant="outline">With size</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    style: { paddingTop: 30 }
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Default arrow",
    withArrow: true,
    opened: true
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Default arrow")), /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Arrow with size",
    withArrow: true,
    arrowSize: 3,
    opened: true
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "With size"))));
}
const arrow = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.arrow = arrow;
//# sourceMappingURL=arrow.js.map
