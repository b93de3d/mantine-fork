import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Divider } from '@mantine/core';

const code = `
<Divider my="xs" label="Label on the left" />
<Divider my="xs" label="Label in the center" labelPosition="center" />
<Divider my="xs" label="Label on the right" labelPosition="right" />

<Divider
  my="xs"
  variant="dashed"
  labelPosition="center"
  label={
    <>
      <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
      <span style={{ marginLeft: 5, marginRight: 5 }}>Search results</span>
    </>
  }
/>

<Divider
  my="xs"
  label="Link label"
  labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    label: "Label on the left"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    label: "Label in the center",
    labelPosition: "center"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    label: "Label on the right",
    labelPosition: "right"
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    variant: "dashed",
    labelPosition: "center",
    label: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, {
      style: { width: 12, height: 12 }
    }), /* @__PURE__ */ React.createElement("span", {
      style: { marginLeft: 5, marginRight: 5 }
    }, "Search results"))
  }), /* @__PURE__ */ React.createElement(Divider, {
    my: "xs",
    label: "Link label",
    labelProps: { component: "a", href: "https://mantine.dev", variant: "link", color: "blue" }
  }));
}
const labels = {
  type: "demo",
  code,
  component: Demo
};

export { labels };
//# sourceMappingURL=labels.js.map
