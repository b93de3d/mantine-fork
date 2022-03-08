import React from 'react';
import { Radioactive, Biohazard } from 'tabler-icons-react';
import { Checkbox } from '@mantine/core';

const code = `
import { Biohazard, Radioactive } from 'tabler-icons-react';

const CheckboxIcon = ({ indeterminate, className }) =>
  indeterminate ? <Radioactive className={className} /> : <Biohazard className={className} />;

<Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
<Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
`;
const CheckboxIcon = ({
  indeterminate,
  className
}) => indeterminate ? /* @__PURE__ */ React.createElement(Radioactive, {
  className
}) : /* @__PURE__ */ React.createElement(Biohazard, {
  className
});
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon: indeterminate",
    indeterminate: true,
    mt: "sm"
  }));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=icon.js.map
