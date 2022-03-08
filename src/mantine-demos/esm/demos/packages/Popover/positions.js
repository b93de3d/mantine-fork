import React, { useState } from 'react';
import { Group, Popover, Badge } from '@mantine/core';

function Wrapper(props) {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(Popover, {
    opened,
    onClose: () => {
    },
    placement: props.placement,
    position: props.position,
    transitionDuration: 0,
    width: 140,
    styles: { body: { textAlign: "center", pointerEvents: "none" } },
    spacing: "xs",
    noFocusTrap: true,
    noClickOutside: true,
    noEscape: true,
    target: /* @__PURE__ */ React.createElement(Badge, {
      color: "blue",
      size: "lg",
      onMouseEnter: () => setOpened(true),
      onMouseLeave: () => setOpened(false)
    }, `${props.position}-${props.placement}`),
    withArrow: true,
    gutter: 10,
    className: props.className
  }, `${props.position}-${props.placement}`);
}
function Demo() {
  const tooltips = ["top", "right", "bottom", "left"].map((position, index) => {
    const placements = ["start", "center", "end"].map((placement) => /* @__PURE__ */ React.createElement(Wrapper, {
      key: placement,
      position,
      placement
    }));
    return /* @__PURE__ */ React.createElement(Group, {
      key: position,
      position: "center",
      mt: index === 0 ? 0 : "md"
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
