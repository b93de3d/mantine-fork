import React from 'react';
import { Progress } from '@mantine/core';

const code = `
<Progress value={75} label="75%" size="xl" radius="xl" />
<Progress
  mt="md"
  size="xl"
  radius="xl"
  sections={[
    { value: 30, color: 'pink', label: 'Documents' },
    { value: 30, color: 'grape', label: 'Apps' },
    { value: 25, color: 'violet', label: 'Other' },
  ]}
/>
`;
function Label() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Progress, {
    value: 75,
    label: "75%",
    size: "xl",
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Progress, {
    mt: "md",
    size: "xl",
    radius: "xl",
    sections: [
      { value: 30, color: "pink", label: "Documents" },
      { value: 30, color: "grape", label: "Apps" },
      { value: 25, color: "violet", label: "Other" }
    ]
  }));
}
const label = {
  type: "demo",
  code,
  component: Label
};

export { label };
//# sourceMappingURL=label.js.map
