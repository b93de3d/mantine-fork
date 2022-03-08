import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<ColorInput error />

// Error as React node \u2013 red border color and message below input
<ColorInput error="You cannot pick white" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Your favorite color",
    placeholder: "Enter color",
    error: true
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    style: { marginTop: 15 },
    label: "Your favorite color",
    placeholder: "Enter color",
    error: "You cannot pick white"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
