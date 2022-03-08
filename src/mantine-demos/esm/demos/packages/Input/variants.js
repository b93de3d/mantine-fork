import React from 'react';
import { Input } from '@mantine/core';

const code = `
<Input variant="default" placeholder="Default variant" />
<Input variant="filled" placeholder="Filled variant" />
<Input variant="unstyled" placeholder="Unstyled variant" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    variant: "default",
    placeholder: "Default variant"
  }), /* @__PURE__ */ React.createElement(Input, {
    style: { marginTop: 15 },
    variant: "filled",
    placeholder: "Filled variant"
  }), /* @__PURE__ */ React.createElement(Input, {
    style: { marginTop: 15 },
    variant: "unstyled",
    placeholder: "Unstyled variant"
  }));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

export { variants };
//# sourceMappingURL=variants.js.map
