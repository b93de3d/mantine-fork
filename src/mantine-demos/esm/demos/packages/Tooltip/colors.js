import React from 'react';
import { upperFirst } from '@mantine/hooks';
import { MANTINE_COLORS, Tooltip, Badge, Group } from '@mantine/core';

function Demo() {
  const colors2 = MANTINE_COLORS.map((color) => /* @__PURE__ */ React.createElement(Tooltip, {
    key: color,
    color,
    label: upperFirst(color),
    withArrow: true
  }, /* @__PURE__ */ React.createElement(Badge, {
    color
  }, upperFirst(color))));
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, colors2);
}
const colors = {
  type: "demo",
  component: Demo
};

export { Demo, colors };
//# sourceMappingURL=colors.js.map
