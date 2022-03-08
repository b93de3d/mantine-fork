import React, { useState } from 'react';
import { TransferList } from '@mantine/core';

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
const mockdata = [
  [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
    { value: "gatsby", label: "Gatsby.js" },
    { value: "vue", label: "Vue" },
    { value: "jq", label: "jQuery" }
  ],
  [
    { value: "sv", label: "Svelte" },
    { value: "rw", label: "Redwood" },
    { value: "np", label: "NumPy" },
    { value: "dj", label: "Django" },
    { value: "fl", label: "Flask" }
  ]
];
function Wrapper(props) {
  const [data, setData] = useState(mockdata);
  return /* @__PURE__ */ React.createElement(TransferList, __spreadValues({
    value: data,
    onChange: setData
  }, props));
}

export { Wrapper };
//# sourceMappingURL=_wrapper.js.map
