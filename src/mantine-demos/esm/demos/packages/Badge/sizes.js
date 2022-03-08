import React from 'react';
import { MANTINE_SIZES, Badge, Text, Group } from '@mantine/core';

function Demo() {
  const sizes2 = MANTINE_SIZES.map((size) => /* @__PURE__ */ React.createElement(Badge, {
    key: size,
    size
  }, size, " size"));
  const radius = MANTINE_SIZES.map((size) => /* @__PURE__ */ React.createElement(Badge, {
    key: size,
    radius: size
  }, size, " radius"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "lg",
    style: { marginBottom: 20 }
  }, "Predefined sizes from xs to xl:"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, sizes2)), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "lg",
    style: { marginBottom: 20 }
  }, "Theme radius from xs to xl:"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, radius)));
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
