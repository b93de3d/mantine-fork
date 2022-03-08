'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => \`\${value}@\${provider}\`)
      : [];

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      label="Email"
      placeholder="Start typing to see options"
      data={data}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState("");
  const data = value.trim().length > 0 && !value.includes("@") ? ["gmail.com", "outlook.com", "yahoo.com"].map((provider) => `${value}@${provider}`) : [];
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    value,
    onChange: setValue,
    label: "Email",
    placeholder: "Start typing to see options",
    data
  }));
}
const dynamic = {
  type: "demo",
  code,
  component: Demo
};

exports.dynamic = dynamic;
//# sourceMappingURL=dynamic.js.map
