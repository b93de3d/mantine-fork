import React from 'react';
import { Navbar } from '@mantine/core';
import { User } from './_user.js';
import { Brand } from './_brand.js';
import { MainLinks } from './_mainLinks.js';

const code = `
<Navbar height={600} padding="xs" width={{ base: 300 }}>
  <Navbar.Section><Brand /></Navbar.Section>
  <Navbar.Section grow mt="lg"><MainLinks /></Navbar.Section>
  <Navbar.Section><User /></Navbar.Section>
</Navbar>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Navbar, {
    height: 600,
    padding: "xs",
    width: { base: 300 }
  }, /* @__PURE__ */ React.createElement(Navbar.Section, {
    mt: "xs"
  }, /* @__PURE__ */ React.createElement(Brand, null)), /* @__PURE__ */ React.createElement(Navbar.Section, {
    grow: true,
    mt: "lg"
  }, /* @__PURE__ */ React.createElement(MainLinks, null)), /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(User, null)));
}
const navbar = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

export { navbar };
//# sourceMappingURL=navbar.js.map
