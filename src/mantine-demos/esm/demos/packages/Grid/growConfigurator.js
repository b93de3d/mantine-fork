import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Grid, __spreadValues({}, props), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 4
  }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 4
  }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 4
  }, "3"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 4
  }, "4"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 4
  }, "5"));
}
const codeTemplate = (props) => `<Grid${props}>
  <Grid.Col span={4}>1</Grid.Col>
  <Grid.Col span={4}>2</Grid.Col>
  <Grid.Col span={4}>3</Grid.Col>
  <Grid.Col span={4}>4</Grid.Col>
  <Grid.Col span={4}>5</Grid.Col>
</Grid>`;
const growConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "grow",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    },
    {
      name: "gutter",
      type: "size",
      initialValue: "md",
      defaultValue: "md"
    }
  ]
};

export { growConfigurator };
//# sourceMappingURL=growConfigurator.js.map
