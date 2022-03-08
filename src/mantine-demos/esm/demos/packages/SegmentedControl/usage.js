import React from 'react';
import { SegmentedControlWrapper } from './Wrapper.js';

const code = `
<SegmentedControl
  data={[
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'ng' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ React.createElement(SegmentedControlWrapper, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
