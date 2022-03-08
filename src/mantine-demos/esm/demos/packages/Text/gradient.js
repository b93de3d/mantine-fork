import React from 'react';
import { Group, Text } from '@mantine/core';

const code = `
<Text
  component="span"
  align="center"
  variant="gradient"
  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
  size="xl"
  weight={700}
  style={{ fontFamily: 'Greycliff CF, sans-serif' }}
>
  Indigo cyan gradient
</Text>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    align: "center",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan", deg: 45 },
    size: "xl",
    weight: 700,
    style: { fontFamily: "Greycliff CF, sans-serif" }
  }, "Indigo cyan gradient"));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=gradient.js.map
