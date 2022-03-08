import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';

const code = `
<Input
  variant="headless"
  placeholder="Add your own styles with styles API"
  icon={<TwitterLogoIcon />}
  rightSection="$"
  styles={{
    input: {
      width: '100%',
      boxSizing: 'border-box',
    }
  }}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Input, {
    styles: { input: { width: "100%", boxSizing: "border-box" } },
    icon: /* @__PURE__ */ React.createElement(TwitterLogoIcon, null),
    rightSection: "$",
    variant: "headless",
    placeholder: "Add your own styles with styles API"
  });
}
const headless = {
  type: "demo",
  code,
  component: Demo
};

export { headless };
//# sourceMappingURL=headless.js.map
