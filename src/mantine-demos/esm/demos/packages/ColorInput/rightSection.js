import React, { useState } from 'react';
import { UpdateIcon } from '@modulz/radix-icons';
import { ColorInput, ActionIcon } from '@mantine/core';

const code = `
import { useState } from 'react';
import { UpdateIcon } from '@modulz/radix-icons';
import { ActionIcon, ColorInput } from '@mantine/core';

const randomColor = () => \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <UpdateIcon />
        </ActionIcon>
      }
    />
  );
}
`;
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function Demo() {
  const [value, onChange] = useState(randomColor());
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    value,
    onChange,
    rightSection: /* @__PURE__ */ React.createElement(ActionIcon, {
      onClick: () => onChange(randomColor())
    }, /* @__PURE__ */ React.createElement(UpdateIcon, null))
  }));
}
const rightSection = {
  type: "demo",
  component: Demo,
  code
};

export { rightSection };
//# sourceMappingURL=rightSection.js.map
