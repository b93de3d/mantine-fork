import React from 'react';
import { PlusCircledIcon } from '@modulz/radix-icons';
import { BaseDemo } from './_base.js';

const code = `
<Accordion icon={<PlusCircledIcon />} disableIconRotation>
  {/* <Accordion.Item /> components */}
</Accordion>
`;
function IconReplaceDemo() {
  return /* @__PURE__ */ React.createElement(BaseDemo, {
    disableIconRotation: true,
    icon: /* @__PURE__ */ React.createElement(PlusCircledIcon, null)
  });
}
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(IconReplaceDemo, null));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

export { IconReplaceDemo, icon };
//# sourceMappingURL=icon.js.map
