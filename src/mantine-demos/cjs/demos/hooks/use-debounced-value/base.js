'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var CodeDemo = require('../../../components/Demo/CodeDemo/CodeDemo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (leading) => `import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

export function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200${leading ? ", { leading: true }" : ""});

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}`;
function UseDebouncedValueBaseDemo({
  leading = false,
  toggle = false
}) {
  const [value, setValue] = React.useState("");
  const [debounced] = hooks.useDebouncedValue(value, 200, { leading });
  return /* @__PURE__ */ React__default.createElement(CodeDemo['default'], {
    code: code(leading),
    language: "tsx",
    toggle
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      maxWidth: 400,
      margin: "auto"
    }
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Enter value to see debounce effect",
    placeholder: "Enter value to see debounce effect",
    value,
    style: { flex: 1 },
    onChange: (event) => setValue(event.currentTarget.value)
  })), /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto", marginTop: 15 }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    component: "span",
    color: "gray",
    size: "sm"
  }, "Value:"), " ", value.trim() || "[empty string]"), /* @__PURE__ */ React__default.createElement(core.Text, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    component: "span",
    color: "gray",
    size: "sm"
  }, "Debounced value:"), " ", debounced.trim() || "[empty string]")));
}

exports.UseDebouncedValueBaseDemo = UseDebouncedValueBaseDemo;
//# sourceMappingURL=base.js.map
