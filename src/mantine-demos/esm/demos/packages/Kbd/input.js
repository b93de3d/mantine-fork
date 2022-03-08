import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { TextInput, Kbd } from '@mantine/core';

const code = `
import { Kbd, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<MagnifyingGlassIcon />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement(Kbd, null, "Ctrl"), /* @__PURE__ */ React.createElement("span", {
    style: { margin: "0 5px" }
  }, "+"), /* @__PURE__ */ React.createElement(Kbd, null, "K"));
  return /* @__PURE__ */ React.createElement(TextInput, {
    placeholder: "Search",
    icon: /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, null),
    rightSectionWidth: 90,
    rightSection,
    styles: { rightSection: { pointerEvents: "none" } }
  });
}
const input = {
  type: "demo",
  code,
  component: Demo
};

export { input };
//# sourceMappingURL=input.js.map
