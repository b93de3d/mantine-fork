import React from 'react';
import { MANTINE_SIZES, Group } from '@mantine/core';
import { DemoBase } from './_base.js';

const items = MANTINE_SIZES.map((size) => /* @__PURE__ */ React.createElement(DemoBase, {
  size,
  key: size
}));
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

export { Demo, sizes };
//# sourceMappingURL=sizes.js.map
