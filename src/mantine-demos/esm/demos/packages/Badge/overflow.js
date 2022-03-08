import React from 'react';
import { Badge } from '@mantine/core';

const code = `
<div style={{ width: 200 }}>
  <Badge variant="filled" fullWidth>
    Full width badge
  </Badge>
</div>

<div style={{ width: 120 }}>
  <Badge variant="filled" fullWidth>
    Badge with overflow
  </Badge>
</div>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: 200 }
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled",
    fullWidth: true
  }, "Full width badge")), /* @__PURE__ */ React.createElement("div", {
    style: { width: 120, marginLeft: 15 }
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled",
    fullWidth: true
  }, "Badge with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

export { overflow };
//# sourceMappingURL=overflow.js.map
