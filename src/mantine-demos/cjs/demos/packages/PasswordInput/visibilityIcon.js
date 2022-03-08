'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Change visibility toggle icon",
    placeholder: "Change visibility toggle icon",
    defaultValue: "secret",
    visibilityToggleIcon: ({ reveal, size }) => reveal ? /* @__PURE__ */ React__default.createElement(tablerIconsReact.EyeOff, {
      size
    }) : /* @__PURE__ */ React__default.createElement(tablerIconsReact.EyeCheck, {
      size
    })
  }));
}
const visibilityIcon = {
  type: "demo",
  component: Demo,
  code
};

exports.visibilityIcon = visibilityIcon;
//# sourceMappingURL=visibilityIcon.js.map
