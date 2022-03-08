'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { UpdateIcon } from '@modulz/radix-icons';
import { ActionIcon, ColorInput } from '@mantine/core';

const randomColor = () => \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <UpdateIcon />
        </ActionIcon>
      }
    />
  );
}
`;
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function Demo() {
  const [value, onChange] = React.useState(randomColor());
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    value,
    onChange,
    rightSection: /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
      onClick: () => onChange(randomColor())
    }, /* @__PURE__ */ React__default.createElement(radixIcons.UpdateIcon, null))
  }));
}
const rightSection = {
  type: "demo",
  component: Demo,
  code
};

exports.rightSection = rightSection;
//# sourceMappingURL=rightSection.js.map
