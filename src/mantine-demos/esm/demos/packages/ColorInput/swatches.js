import React from 'react';
import { DEFAULT_THEME, ColorInput } from '@mantine/core';

const code = `
<ColorInput format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors).map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)}]} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    swatches: Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])
  }));
}
const swatches = {
  type: "demo",
  component: Demo,
  code
};

export { swatches };
//# sourceMappingURL=swatches.js.map
