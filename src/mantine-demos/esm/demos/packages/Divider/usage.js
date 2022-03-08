import React from 'react';
import { Divider } from '@mantine/core';

const code = `
<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Divider, {
    my: "sm"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "sm",
    variant: "dashed"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "sm",
    variant: "dotted"
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
