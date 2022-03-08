'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `import React, { useState } from 'react';
import { Popover, Badge, Image, Text } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="center"
      withArrow
      noFocusTrap
      noEscape
      transition="pop-top-left"
      width={260}
      styles={{ body: { pointerEvents: 'none' } }}
      target={
        <Badge onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
          Hover badge to see popover
        </Badge>
      }
    >
      <div style={{ display: 'flex' }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          sx={{ minWidth: 30 }}
          mr="md"
        />
        <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
      </div>
    </Popover>
  );
}`;
function Demo() {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ React__default.createElement(core.Popover, {
    opened,
    onClose: () => setOpened(false),
    position: "bottom",
    placement: "center",
    withArrow: true,
    noFocusTrap: true,
    noEscape: true,
    width: 260,
    styles: { body: { pointerEvents: "none" } },
    transition: "pop-top-left",
    target: /* @__PURE__ */ React__default.createElement(core.Badge, {
      onMouseEnter: () => setOpened(true),
      onMouseLeave: () => setOpened(false)
    }, "Hover badge to see popover")
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg",
    width: 30,
    height: 30,
    sx: { minWidth: 30 },
    mr: "md"
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm"
  }, "Thanks for stopping by and checking Mantine, you are awesome!")))));
}
const hover = {
  type: "demo",
  code,
  component: Demo
};

exports.hover = hover;
//# sourceMappingURL=hover.js.map
