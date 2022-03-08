'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Wrapper(props) {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Popover, {
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
    target: /* @__PURE__ */ React__default.createElement(core.Badge, {
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
    const placements = ["start", "center", "end"].map((placement) => /* @__PURE__ */ React__default.createElement(Wrapper, {
      key: placement,
      position,
      placement
    }));
    return /* @__PURE__ */ React__default.createElement(core.Group, {
      key: position,
      position: "center",
      mt: index === 0 ? 0 : "md"
    }, placements);
  });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, tooltips);
}
const positions = {
  type: "demo",
  component: Demo
};

exports.positions = positions;
//# sourceMappingURL=positions.js.map
