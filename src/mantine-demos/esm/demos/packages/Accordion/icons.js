import React from 'react';
import { BlendingModeIcon, ShuffleIcon, MarginIcon } from '@modulz/radix-icons';
import { Accordion, ThemeIcon } from '@mantine/core';
import { baseAccordionMockdata } from './_mockdata.js';

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
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({
    disableIconRotation: true
  }, props), /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: baseAccordionMockdata[0].label,
    icon: /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "violet",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React.createElement(BlendingModeIcon, {
      style: { width: 14, height: 14 }
    }))
  }, baseAccordionMockdata[0].content), /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: baseAccordionMockdata[1].label,
    icon: /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "orange",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React.createElement(ShuffleIcon, {
      style: { width: 14, height: 14 }
    }))
  }, baseAccordionMockdata[1].content), /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: baseAccordionMockdata[2].label,
    icon: /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "blue",
      variant: "light",
      size: 28,
      radius: "xl"
    }, /* @__PURE__ */ React.createElement(MarginIcon, {
      style: { width: 14, height: 14 }
    }))
  }, baseAccordionMockdata[2].content));
}
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(IconsReplacementDemo, null));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

export { IconsReplacementDemo, icons };
//# sourceMappingURL=icons.js.map
