'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tooltip
  wrapLines
  width={220}
  withArrow
  transition="fade"
  transitionDuration={200}
  label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
>
  <Button variant="outline">Multiline tooltip</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    wrapLines: true,
    width: 220,
    withArrow: true,
    transition: "fade",
    transitionDuration: 200,
    label: "Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Multiline tooltip")));
}
const multiline = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.multiline = multiline;
//# sourceMappingURL=multiline.js.map
