import React from 'react';
import { Navbar, ScrollArea } from '@mantine/core';
import { User } from './_user.js';
import { Brand } from './_brand.js';
import { MainLinks } from './_mainLinks.js';

const code = `
import { Navbar, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} padding={10} width={{ base: 300 }}>
      <Navbar.Section mt="xs"><Brand /></Navbar.Section>

      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section><User /></Navbar.Section>
    </Navbar>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Navbar, {
    height: 600,
    padding: 10,
    width: { base: 300 }
  }, /* @__PURE__ */ React.createElement(Navbar.Section, {
    mt: "xs"
  }, /* @__PURE__ */ React.createElement(Brand, null)), /* @__PURE__ */ React.createElement(Navbar.Section, {
    grow: true,
    component: ScrollArea,
    ml: -10,
    mr: -10,
    sx: { paddingLeft: 10, paddingRight: 10 }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { paddingTop: 15, paddingBottom: 15 }
  }, /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null))), /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(User, null)));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

export { scrollbars };
//# sourceMappingURL=scrollbars.js.map
