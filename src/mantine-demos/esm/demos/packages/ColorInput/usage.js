import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput placeholder="Pick color" label="Your favorite color" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    defaultValue: "#ffffff"
  }));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=usage.js.map
