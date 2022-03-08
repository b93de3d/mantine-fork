import React, { useState } from 'react';
import { DEFAULT_THEME, useMantineTheme, LoadingOverlay, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';
import { demoBase } from './_demo-base.js';

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
const code = `
<LoadingOverlay loader={<YourLoader />} />
`;
const customLoader = /* @__PURE__ */ React.createElement("svg", {
  width: "54",
  height: "54",
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: DEFAULT_THEME.colors.blue[6]
}, /* @__PURE__ */ React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ React.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ React.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))));
function Demo() {
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      borderRadius: 4,
      position: "relative",
      margin: "auto"
    }
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible,
    zIndex: 1e3,
    style: { borderRadius: 4 },
    loader: customLoader
  }), /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noSubmit: true,
    noShadow: theme.colorScheme === "dark"
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    style: { marginTop: 20 }
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setVisible((v) => !v)
  }, "Toggle overlay")));
}
const loader = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  code,
  component: Demo
});

export { Demo, loader };
//# sourceMappingURL=loader.js.map
