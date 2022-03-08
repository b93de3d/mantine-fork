import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';

const code = `
<Input component="button">Button input</Input>

<Input component="select" rightSection={<ChevronDownIcon />}>
  <option value="1">1</option>
  <option value="2">2</option>
</Input>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    component: "button"
  }, "Button input"), /* @__PURE__ */ React.createElement(Input, {
    style: { marginTop: 15 },
    component: "select",
    rightSection: /* @__PURE__ */ React.createElement(ChevronDownIcon, null)
  }, /* @__PURE__ */ React.createElement("option", {
    value: "1"
  }, "1"), /* @__PURE__ */ React.createElement("option", {
    value: "2"
  }, "2")));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=component.js.map
