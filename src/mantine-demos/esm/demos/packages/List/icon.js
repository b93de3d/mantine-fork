import React from 'react';
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react';
import { List, ThemeIcon } from '@mantine/core';

const code = `
import { List, ThemeIcon } from '@mantine/core';
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IssueClosedIcon size={12} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IssueDraftIcon size={12} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 500, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(List, {
    spacing: "xs",
    size: "sm",
    center: true,
    icon: /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "teal",
      size: 24,
      radius: "xl"
    }, /* @__PURE__ */ React.createElement(IssueClosedIcon, {
      size: 12
    }))
  }, /* @__PURE__ */ React.createElement(List.Item, null, "Clone or download repository from GitHub"), /* @__PURE__ */ React.createElement(List.Item, null, "Install dependencies with yarn"), /* @__PURE__ */ React.createElement(List.Item, null, "To start development server run npm start command"), /* @__PURE__ */ React.createElement(List.Item, null, "Run tests to make sure your changes do not break the build"), /* @__PURE__ */ React.createElement(List.Item, {
    icon: /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "blue",
      size: 24,
      radius: "xl"
    }, /* @__PURE__ */ React.createElement(IssueDraftIcon, {
      size: 12
    }))
  }, "Submit a pull request once you are done")));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=icon.js.map
