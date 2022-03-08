import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input, Badge } from '@mantine/core';

const code = `
<Input
  icon={<TwitterLogoIcon />}
  placeholder="Your twitter"
  rightSection={rightSection}
  rightSectionWidth={70}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React.createElement(Badge, {
    color: "blue",
    variant: "filled"
  }, "new");
  return /* @__PURE__ */ React.createElement(Input, {
    icon: /* @__PURE__ */ React.createElement(TwitterLogoIcon, null),
    placeholder: "Your twitter",
    rightSection,
    rightSectionWidth: 70,
    styles: { rightSection: { pointerEvents: "none" } }
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
