import React from 'react';
import { MANTINE_SIZES, Input } from '@mantine/core';

const code = `
<Input size="xl" placeholder="xl input size" />
`;
function Demo() {
  const inputs = MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React.createElement(Input, {
    style: { marginTop: index === 0 ? 0 : 15 },
    size,
    key: size,
    placeholder: `${size} input size`
  }));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, inputs);
}
const sizes = {
  type: "demo",
  code,
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
