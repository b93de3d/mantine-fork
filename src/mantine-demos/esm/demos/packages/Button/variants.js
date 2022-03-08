import React from 'react';
import { Group, Button } from '@mantine/core';

function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "subtle"
  }, "Subtle variant"), /* @__PURE__ */ React.createElement(Button, {
    variant: "light"
  }, "Light variant"), /* @__PURE__ */ React.createElement(Button, null, "Filled variant"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Outline variant"), /* @__PURE__ */ React.createElement(Button, {
    variant: "default"
  }, "Default variant")));
}
const variants = {
  type: "demo",
  component: Demo
};

export { variants };
//# sourceMappingURL=variants.js.map
