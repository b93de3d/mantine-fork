import React from 'react';
import { Group, Tooltip, Badge } from '@mantine/core';

function Demo() {
  const tooltips = ["top", "right", "bottom", "left"].map((position, index) => {
    const placements = ["start", "center", "end"].map((placement) => /* @__PURE__ */ React.createElement(Tooltip, {
      key: placement,
      placement,
      position,
      label: `${position}-${placement}`,
      withArrow: true,
      gutter: 10
    }, /* @__PURE__ */ React.createElement(Badge, {
      color: "blue",
      size: "lg"
    }, `${position}-${placement}`)));
    return /* @__PURE__ */ React.createElement(Group, {
      key: position,
      position: "center",
      style: { marginTop: index !== 0 && 10 }
    }, placements);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, tooltips);
}
const positions = {
  type: "demo",
  component: Demo
};

export { positions };
//# sourceMappingURL=positions.js.map
