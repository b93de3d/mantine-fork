import React from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { Notification } from '@mantine/core';
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
<Notification title="Default notification">
  This is default notification with title and body
</Notification>

<Notification icon={<CheckIcon />} color="teal" title="Teal notification">
  This is teal notification with icon
</Notification>

<Notification icon={<Cross1Icon />} color="red">
  Bummer! Notification without title
</Notification>

<Notification
  loading
  title="Uploading data to the server"
  disallowClose
>
  Please wait until data is uploaded, you cannot close this notification yet
</Notification>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Notification, {
    title: "Default notification",
    onClose: () => {
    }
  }, "This is default notification with title and body"), /* @__PURE__ */ React.createElement(Notification, {
    style: { marginTop: 15 },
    icon: /* @__PURE__ */ React.createElement(CheckIcon, null),
    color: "teal",
    title: "Teal notification",
    onClose: () => {
    }
  }, "This is teal notification with icon"), /* @__PURE__ */ React.createElement(Notification, {
    style: { marginTop: 15 },
    icon: /* @__PURE__ */ React.createElement(Cross1Icon, null),
    color: "red",
    onClose: () => {
    }
  }, "Bummer! Notification without title"), /* @__PURE__ */ React.createElement(Notification, {
    style: { marginTop: 15 },
    loading: true,
    title: "Uploading data to the server",
    disallowClose: true,
    onClose: () => {
    }
  }, "Please wait until data is uploaded, you cannot close this notification yet"));
}
const usage = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  code,
  component: Demo
});

export { usage };
//# sourceMappingURL=usage.js.map
