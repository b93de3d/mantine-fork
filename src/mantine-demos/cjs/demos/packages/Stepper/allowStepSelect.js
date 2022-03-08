'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Fist step" description="Create an account" allowStepSelect={active > 0}>
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email" allowStepSelect={active > 1}>
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access" allowStepSelect={active > 2}>
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(1);
  const nextStep = () => setActive((current) => current < 3 ? current + 1 : current);
  const prevStep = () => setActive((current) => current > 0 ? current - 1 : current);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active,
    onStepClick: setActive,
    breakpoint: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Fist step",
    description: "Create an account",
    allowStepSelect: active > 0
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 1 content: Create an account")), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Second step",
    description: "Verify email",
    allowStepSelect: active > 1
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 2 content: Verify email")), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Final step",
    description: "Get full access",
    allowStepSelect: active > 2
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 3 content: Get full access")), /* @__PURE__ */ React__default.createElement(core.Stepper.Completed, null, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Completed, click back button to get to previous step"))), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "default",
    onClick: prevStep
  }, "Back"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: nextStep
  }, "Next step")));
}
const allowStepSelect = {
  type: "demo",
  component: Demo,
  code
};

exports.allowStepSelect = allowStepSelect;
//# sourceMappingURL=allowStepSelect.js.map
