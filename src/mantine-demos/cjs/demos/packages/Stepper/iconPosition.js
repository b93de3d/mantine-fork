'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Stepper iconPosition="right">
  {/* ...children */}
</Stepper>
`;
function Demo() {
  const [active, setActive] = React.useState(1);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active,
    breakpoint: "sm",
    onStepClick: setActive,
    iconPosition: "right"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const iconPosition = {
  type: "demo",
  component: Demo,
  code
};

exports.iconPosition = iconPosition;
//# sourceMappingURL=iconPosition.js.map
