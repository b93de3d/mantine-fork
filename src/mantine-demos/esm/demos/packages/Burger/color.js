import React from 'react';
import { Group } from '@mantine/core';
import { DemoBase } from './_base.js';

const code = `
<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DemoBase, null), /* @__PURE__ */ React.createElement(DemoBase, {
    color: "#fe6734"
  }), /* @__PURE__ */ React.createElement(DemoBase, {
    color: "#45f50d"
  }));
}
const color = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, color };
//# sourceMappingURL=color.js.map
