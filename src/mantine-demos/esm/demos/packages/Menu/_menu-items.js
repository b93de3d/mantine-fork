import React from 'react';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon, PinRightIcon, TrashIcon } from '@modulz/radix-icons';
import { Menu, Text, Divider } from '@mantine/core';

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
const iconProps = { width: 14, height: 14 };
const menuItems = [
  /* @__PURE__ */ React.createElement(Menu.Label, {
    key: "1"
  }, "Application"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "2",
    icon: /* @__PURE__ */ React.createElement(GearIcon, __spreadValues({}, iconProps))
  }, "Settings"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "3",
    icon: /* @__PURE__ */ React.createElement(ChatBubbleIcon, __spreadValues({}, iconProps))
  }, "Messages"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "4",
    icon: /* @__PURE__ */ React.createElement(ImageIcon, __spreadValues({}, iconProps))
  }, "Gallery"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "5",
    icon: /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, __spreadValues({}, iconProps)),
    rightSection: /* @__PURE__ */ React.createElement(Text, {
      size: "xs",
      color: "dimmed"
    }, "\u2318K")
  }, "Search"),
  /* @__PURE__ */ React.createElement(Divider, {
    key: "6"
  }),
  /* @__PURE__ */ React.createElement(Menu.Label, {
    key: "7"
  }, "Danger zone"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "8",
    icon: /* @__PURE__ */ React.createElement(PinRightIcon, __spreadValues({}, iconProps))
  }, "Transfer my data"),
  /* @__PURE__ */ React.createElement(Menu.Item, {
    key: "9",
    color: "red",
    icon: /* @__PURE__ */ React.createElement(TrashIcon, __spreadValues({}, iconProps))
  }, "Delete my account")
];

export { menuItems };
//# sourceMappingURL=_menu-items.js.map
