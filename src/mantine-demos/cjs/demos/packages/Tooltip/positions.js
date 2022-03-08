'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const tooltips = ["top", "right", "bottom", "left"].map((position, index) => {
    const placements = ["start", "center", "end"].map((placement) => /* @__PURE__ */ React__default.createElement(core.Tooltip, {
      key: placement,
      placement,
      position,
      label: `${position}-${placement}`,
      withArrow: true,
      gutter: 10
    }, /* @__PURE__ */ React__default.createElement(core.Badge, {
      color: "blue",
      size: "lg"
    }, `${position}-${placement}`)));
    return /* @__PURE__ */ React__default.createElement(core.Group, {
      key: position,
      position: "center",
      style: { marginTop: index !== 0 && 10 }
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
