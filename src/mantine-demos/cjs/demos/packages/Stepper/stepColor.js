'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Stepper active={2}>
  <Stepper.Step label="Step 1" description="Create an account" />
  <Stepper.Step
    label="Step 2"
    description="Verify email"
    color="red"
    completedIcon={<CircleX />}
  />
  <Stepper.Step label="Step 3" description="Get full access" />
</Stepper>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active: 2,
    breakpoint: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 2",
    description: "Verify email",
    color: "red",
    completedIcon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.CircleX, null)
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stepColor = {
  type: "demo",
  component: Demo,
  code
};

exports.stepColor = stepColor;
//# sourceMappingURL=stepColor.js.map
