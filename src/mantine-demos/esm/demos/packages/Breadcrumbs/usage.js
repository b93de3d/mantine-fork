import React from 'react';
import { Anchor, useMantineTheme, Breadcrumbs } from '@mantine/core';

const code = `
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="\u2192">{items}</Breadcrumbs>
    </>
  );
}
`;
const items = [
  { title: "Mantine", href: "https://mantine.dev" },
  { title: "Mantine hooks", href: "https://mantine.dev/hooks/getting-started" },
  { title: "use-id", href: "https://mantine.dev/hooks/use-id" }
].map((item, index) => /* @__PURE__ */ React.createElement(Anchor, {
  href: item.href,
  key: index
}, item.title));
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumbs, null, items), /* @__PURE__ */ React.createElement(Breadcrumbs, {
    separator: theme.dir === "ltr" ? "\u2192" : "\u2190",
    style: { marginTop: 10 }
  }, items));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
