import React, { useState } from 'react';
import { Burger } from '@mantine/core';

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
function DemoBase(props) {
  const [opened, onChange] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    style: { padding: 10 }
  }, /* @__PURE__ */ React.createElement(Burger, __spreadValues({
    opened,
    onClick: () => onChange((s) => !s)
  }, props)));
}

export { DemoBase };
//# sourceMappingURL=_base.js.map
