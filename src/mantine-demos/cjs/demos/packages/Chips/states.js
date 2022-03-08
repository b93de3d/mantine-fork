'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Chips multiple value={['checked', 'checked-disabled']}>
  <Chip value="default">Default</Chip>
  <Chip value="checked">Checked</Chip>
  <Chip value="checked-disabled" disabled>
    Checked disabled
  </Chip>
</Chips>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Chips, {
    multiple: true,
    value: ["checked", "checked-disabled"],
    position: "center",
    variant: "outline"
  }, /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "default"
  }, "Outline default"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "checked"
  }, "Outline checked"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "checked-disabled",
    disabled: true
  }, "Outline checked disabled")), /* @__PURE__ */ React__default.createElement(core.Chips, {
    multiple: true,
    value: ["checked", "checked-disabled"],
    position: "center",
    variant: "filled",
    style: { marginTop: 15 }
  }, /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "default"
  }, "Filled default"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "checked"
  }, "Filled checked"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "checked-disabled",
    disabled: true
  }, "Filled checked disabled")));
}
const states = {
  type: "demo",
  component: Demo,
  code
};

exports.states = states;
//# sourceMappingURL=states.js.map
