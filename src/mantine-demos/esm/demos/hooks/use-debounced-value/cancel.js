import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Button, Text } from '@mantine/core';
import CodeDemo from '../../../components/Demo/CodeDemo/CodeDemo.js';

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
  const [value, setValue] = useState("");
  const [debounced, cancel] = useDebouncedValue(value, 1e3);
  return /* @__PURE__ */ React.createElement(CodeDemo, {
    code,
    language: "tsx"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      maxWidth: 400,
      margin: "auto"
    }
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Enter value to see debounce effect",
    placeholder: "Enter value to see debounce effect",
    value,
    style: { flex: 1 },
    onChange: (event) => setValue(event.currentTarget.value)
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: cancel,
    ml: 15
  }, "Cancel")), /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, margin: "auto", marginTop: 15 }
  }, /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    color: "gray",
    size: "sm"
  }, "Value:"), " ", value.trim() || "[empty string]"), /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    color: "gray",
    size: "sm"
  }, "Debounced value:"), " ", debounced.trim() || "[empty string]")));
}

export { UseDebouncedValueCancelDemo };
//# sourceMappingURL=cancel.js.map
