import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
<div style={{ width: 200 }}>
  <Button variant="filled" fullWidth>
    Full width button
  </Button>
</div>

<div style={{ width: 120 }}>
  <Button variant="filled" fullWidth>
    Button with overflow
  </Button>
</div>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement("div", {
    style: { width: 200 }
  }, /* @__PURE__ */ React.createElement(Button, {
    fullWidth: true,
    variant: "outline"
  }, "Full width button")), /* @__PURE__ */ React.createElement("div", {
    style: { width: 120 }
  }, /* @__PURE__ */ React.createElement(Button, {
    fullWidth: true,
    variant: "outline"
  }, "Button with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

export { overflow };
//# sourceMappingURL=overflow.js.map
