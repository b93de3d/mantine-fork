import React, { useState } from 'react';
import { Text, HueSlider, DEFAULT_THEME } from '@mantine/core';

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
  const [value, onChange] = useState(250);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 300, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Text, {
    style: { marginBottom: 10 }
  }, "Hue value: ", value), /* @__PURE__ */ React.createElement(HueSlider, __spreadValues({
    style: { margin: "auto" },
    color: DEFAULT_THEME.colors.blue[7],
    value,
    onChange
  }, props)));
}
const codeTemplate = (props) => `import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange}${props} />
    </>
  );
}`;
const hueConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "size", type: "size", initialValue: "sm", defaultValue: "sm" }]
};

export { hueConfigurator };
//# sourceMappingURL=hueConfigurator.js.map
