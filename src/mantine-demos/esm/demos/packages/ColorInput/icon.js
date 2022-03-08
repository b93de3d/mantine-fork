import React from 'react';
import { BlendingModeIcon } from '@modulz/radix-icons';
import { ColorInput } from '@mantine/core';

const code = `
// Remove color preview
<ColorInput
  label="Without preview"
  placeholder="No color preview"
  withPreview={false}
/>

// Replace color preview with any React node
<ColorInput
  icon={<BlendingModeIcon />}
  label="With icon"
  placeholder="With icon"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Without preview",
    placeholder: "No color preview",
    withPreview: false
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    style: { marginTop: 15 },
    icon: /* @__PURE__ */ React.createElement(BlendingModeIcon, null),
    label: "With icon",
    placeholder: "With icon"
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
