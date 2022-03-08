import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

const code = `
<ColorInput
  placeholder="Pick color"
  label="Your favorite color"
  disallowInput
  withPicker={false}
  swatches={[
    ...DEFAULT_THEME.colors.red,
    ...DEFAULT_THEME.colors.green,
    ...DEFAULT_THEME.colors.blue,
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    disallowInput: true,
    withPicker: false,
    swatches: [
      ...DEFAULT_THEME.colors.red,
      ...DEFAULT_THEME.colors.green,
      ...DEFAULT_THEME.colors.blue
    ]
  }));
}
const swatchesOnly = {
  type: "demo",
  component: Demo,
  code
};

export { swatchesOnly };
//# sourceMappingURL=swatchesOnly.js.map
