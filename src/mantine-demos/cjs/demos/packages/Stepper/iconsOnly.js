'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(0);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active,
    onStepClick: setActive
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.UserCheck, {
      size: 18
    })
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.MailOpened, {
      size: 18
    })
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.ShieldCheck, {
      size: 18
    })
  }));
}
const iconsOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.iconsOnly = iconsOnly;
//# sourceMappingURL=iconsOnly.js.map
