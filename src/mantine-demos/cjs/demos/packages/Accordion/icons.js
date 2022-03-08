'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
<Accordion disableIconRotation>
  <Accordion.Item
    label="Customization"
    icon={
      <ThemeIcon color="violet" variant="light">
        <BlendingModeIcon />
      </ThemeIcon>
    }
  >
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </Accordion.Item>

  {/* ...other <Accordion.Item /> */}
</Accordion>
`;
function IconsReplacementDemo(props) {
  return /* @__PURE__ */ React__default.createElement(core.Accordion, __spreadValues({
    disableIconRotation: true
  }, props), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: _mockdata.baseAccordionMockdata[0].label,
    icon: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      color: "violet",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React__default.createElement(radixIcons.BlendingModeIcon, {
      style: { width: 14, height: 14 }
    }))
  }, _mockdata.baseAccordionMockdata[0].content), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: _mockdata.baseAccordionMockdata[1].label,
    icon: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      color: "orange",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React__default.createElement(radixIcons.ShuffleIcon, {
      style: { width: 14, height: 14 }
    }))
  }, _mockdata.baseAccordionMockdata[1].content), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: _mockdata.baseAccordionMockdata[2].label,
    icon: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      color: "blue",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React__default.createElement(radixIcons.MarginIcon, {
      style: { width: 14, height: 14 }
    }))
  }, _mockdata.baseAccordionMockdata[2].content));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(IconsReplacementDemo, null));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

exports.IconsReplacementDemo = IconsReplacementDemo;
exports.icons = icons;
//# sourceMappingURL=icons.js.map
