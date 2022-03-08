import React from 'react';
import { Text, Slider } from '@mantine/core';

const code = `
// Disable label
<Slider label={null} />

// Format label with function
<Slider label={(value) => \`\${value} \xB0C\`} />

// Always display label
<Slider labelAlwaysOn />

// Change label transition
<Slider
  labelTransition="skew-down"
  labelTransitionDuration={150}
  labelTransitionTimingFunction="ease"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(Text, null, "No label"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    label: null
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 20 }
  }, "Formatted label"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    label: (value) => `${value} \xB0C`
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 20 }
  }, "Label always visible"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    labelAlwaysOn: true
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 20 }
  }, "Custom label transition"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    labelTransition: "skew-down",
    labelTransitionDuration: 150,
    labelTransitionTimingFunction: "ease"
  }));
}
const label = {
  type: "demo",
  component: Demo,
  code
};

export { label };
//# sourceMappingURL=label.js.map
