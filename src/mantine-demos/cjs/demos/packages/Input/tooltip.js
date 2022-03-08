'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input, Tooltip } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      <InfoCircledIcon />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "We do not send spam",
    position: "top",
    placement: "end"
  }, /* @__PURE__ */ React__default.createElement(radixIcons.InfoCircledIcon, {
    style: { width: 15, height: 15, display: "block", opacity: 0.5 }
  }));
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    placeholder: "Your email",
    rightSection
  });
}
const tooltip = {
  type: "demo",
  code,
  component: Demo
};

exports.tooltip = tooltip;
//# sourceMappingURL=tooltip.js.map
