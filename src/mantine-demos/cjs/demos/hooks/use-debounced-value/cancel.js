'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var CodeDemo = require('../../../components/Demo/CodeDemo/CodeDemo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

export function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={cancel} size="lg" style={{ marginLeft: 15 }}>
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}`;
function UseDebouncedValueCancelDemo() {
  const [value, setValue] = React.useState("");
  const [debounced, cancel] = hooks.useDebouncedValue(value, 1e3);
  return /* @__PURE__ */ React__default.createElement(CodeDemo['default'], {
    code,
    language: "tsx"
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
  }), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: cancel,
    ml: 15
  }, "Cancel")), /* @__PURE__ */ React__default.createElement("div", {
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

exports.UseDebouncedValueCancelDemo = UseDebouncedValueCancelDemo;
//# sourceMappingURL=cancel.js.map
