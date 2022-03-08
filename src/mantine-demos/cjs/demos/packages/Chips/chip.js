'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Chip value="chip" checked={checked} onChange={setChecked}>
      Just a chip
    </Chip>
  );
}
`;
function Demo() {
  const [checked, setChecked] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "chip",
    checked,
    onChange: setChecked
  }, "Just a chip"));
}
const chip = {
  type: "demo",
  component: Demo,
  code
};

exports.chip = chip;
//# sourceMappingURL=chip.js.map
