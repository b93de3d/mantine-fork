import React, { useState } from 'react';
import { Group, ColorPicker, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorPicker, Group, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}
`;
function Demo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(ColorPicker, {
    format: "rgba",
    value,
    onChange
  }), /* @__PURE__ */ React.createElement(Text, null, value));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=usage.js.map
