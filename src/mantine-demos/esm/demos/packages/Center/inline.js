import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { useMantineTheme, Anchor, Center } from '@mantine/core';

const code = `
<Anchor href="https://mantine.dev" target="_blank">
  <Center inline>
    <ArrowLeftIcon style={{ marginRight: 5 }} />
    <span>Back to Mantine website</span>
  </Center>
</Anchor>
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://mantine.dev",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Center, {
    inline: true
  }, theme.dir === "ltr" ? /* @__PURE__ */ React.createElement(ArrowLeftIcon, {
    style: { marginRight: 5 }
  }) : /* @__PURE__ */ React.createElement(ArrowRightIcon, {
    style: { marginLeft: 5 }
  }), /* @__PURE__ */ React.createElement("span", null, "Back to Mantine website")));
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

export { inline };
//# sourceMappingURL=inline.js.map
