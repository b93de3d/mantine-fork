import React from 'react';
import { Divider } from '@mantine/core';

const code = `
<Divider size="xs" />
<Divider size="sm" />
<Divider size="md" />
<Divider size="lg" />
<Divider size="xl" />
<Divider size={10} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: "xs"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: "sm"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: "md"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: "lg"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: "xl"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    size: 10
  }));
}
const sizes = {
  type: "demo",
  code,
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
