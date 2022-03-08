import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper.js';

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
const html = `
<p>This editor is <b>read only</b></p>
`;
const code = `
<RichTextEditor readOnly {...otherProps} />
`;
function Demo(props) {
  const [value, onChange] = useState(html);
  return /* @__PURE__ */ React.createElement(SSRWrapper, __spreadValues({
    readOnly: true,
    value,
    onChange,
    stickyOffset: 60
  }, props));
}
const readOnly = {
  type: "demo",
  component: Demo,
  code
};

export { html, readOnly };
//# sourceMappingURL=readOnly.js.map
