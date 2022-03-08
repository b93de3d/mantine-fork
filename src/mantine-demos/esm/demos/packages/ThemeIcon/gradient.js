import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { Group, ThemeIcon } from '@mantine/core';

const code = `
<ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>{icon}</ThemeIcon>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, /* @__PURE__ */ React.createElement(RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React.createElement(ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, /* @__PURE__ */ React.createElement(RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React.createElement(ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, /* @__PURE__ */ React.createElement(RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React.createElement(ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, /* @__PURE__ */ React.createElement(RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React.createElement(ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "grape", to: "pink", deg: 35 }
  }, /* @__PURE__ */ React.createElement(RocketIcon, {
    style: { width: 20, height: 20 }
  })));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=gradient.js.map
