'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const [scrollPosition2, onScrollPositionChange] = React.useState({ x: 0, y: 0 });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, {
    style: { width: 300, height: 200 },
    onScrollPositionChange
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 600 }
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null))), /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll position: ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${scrollPosition2.x}, y: ${scrollPosition2.y} }`)));
}
const scrollPosition = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollPosition = scrollPosition;
//# sourceMappingURL=scrollPosition.js.map
