import React from 'react';
import { DEFAULT_THEME, Group, ColorPicker } from '@mantine/core';

const code = `
<ColorPicker format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors).map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)}]} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(ColorPicker, {
    format: "hex",
    defaultValue: "rgba(50, 151, 194, 1)",
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
