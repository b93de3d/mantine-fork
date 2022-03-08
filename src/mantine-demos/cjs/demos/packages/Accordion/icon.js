'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Accordion icon={<PlusCircledIcon />} disableIconRotation>
  {/* <Accordion.Item /> components */}
</Accordion>
`;
function IconReplaceDemo() {
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    disableIconRotation: true,
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.PlusCircledIcon, null)
  });
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(IconReplaceDemo, null));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

exports.IconReplaceDemo = IconReplaceDemo;
exports.icon = icon;
//# sourceMappingURL=icon.js.map
