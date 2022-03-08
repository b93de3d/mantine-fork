'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function GridItem(props) {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, props), {
    style: __spreadValues({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.blue[0],
      padding: theme.spacing.md
    }, props.style)
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: theme.colorScheme === "dark" ? "gray" : "blue",
    size: "xl",
    weight: 700,
    align: "center"
  }, props.children));
}
const defaultItems = Array(5).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(GridItem, {
  key: index
}, index + 1));

exports.GridItem = GridItem;
exports.defaultItems = defaultItems;
//# sourceMappingURL=_Item.js.map
