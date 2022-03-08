'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _countriesData = require('./_countries-data.js');

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { CloseButton, MultiSelect, Box } from '@mantine/core';

function Value({ value, label, onRemove, classNames, ...others }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          border: \`1px solid \${theme.colors.gray[4]}\`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <div style={{ marginRight: 10 }}>
          <FlagIcon />
        </div>
        <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div>
        <CloseButton onMouseDown={onRemove} variant="transparent" size={22} iconSize={14} tabIndex={-1} />
      </Box>
    </div>
  );
}

const Item = forwardRef(({ label, value, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Box sx={{ display: 'flex' }}>
      <Box mr={10}>
        <FlagIcon />
      </Box>
      <div>{label}</div>
    </Box>
  </div>
));

export function CountriesSelect() {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'DE']}
      placeholder="Pick countries"
      label="Which countries you visited last year?"
    />
  );
}
`;
function Value(_a) {
  var _b = _a, { value, label, onRemove, classNames } = _b, others = __objRest(_b, ["value", "label", "onRemove", "classNames"]);
  const Flag = _countriesData.flags[value];
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, others), /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: (theme) => ({
      display: "flex",
      cursor: "default",
      alignItems: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[4]}`,
      paddingLeft: 10,
      borderRadius: 4
    })
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    mr: 10
  }, /* @__PURE__ */ React__default.createElement(Flag, null)), /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: { lineHeight: 1, fontSize: 12 }
  }, label), /* @__PURE__ */ React__default.createElement(core.CloseButton, {
    onMouseDown: onRemove,
    variant: "transparent",
    size: 22,
    iconSize: 14,
    tabIndex: -1
  })));
}
const Item = React.forwardRef((_c, ref) => {
  var _d = _c, { label, value } = _d, others = __objRest(_d, ["label", "value"]);
  const Flag = _countriesData.flags[value];
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    ref
  }, others), /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    mr: 10
  }, /* @__PURE__ */ React__default.createElement(Flag, null)), /* @__PURE__ */ React__default.createElement("div", null, label)));
});
function CountriesSelect(props) {
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, __spreadValues({
    data: _countriesData.countriesData,
    limit: 20,
    valueComponent: Value,
    itemComponent: Item,
    searchable: true,
    defaultValue: ["US", "FI"],
    placeholder: "Pick countries",
    label: "Which countries you visited last year?"
  }, props));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(CountriesSelect, null));
}
const countries = {
  type: "demo",
  code,
  component: Demo
};

exports.CountriesSelect = CountriesSelect;
exports.countries = countries;
//# sourceMappingURL=countries.js.map
