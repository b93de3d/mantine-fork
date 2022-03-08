'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useRef } from 'react';
import { ScrollArea, Button, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>();

  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Group position="center" direction="column">
      <ScrollArea style={{ width: 300, height: 200 }} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group>
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Group>
  );
}
`;
function Demo() {
  const viewport = React.useRef();
  const scrollToBottom = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: "smooth" });
  const scrollToCenter = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: "smooth" });
  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: "smooth" });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, {
    style: { width: 300, height: 200 },
    viewportRef: viewport
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null)), /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: scrollToBottom,
    variant: "outline"
  }, "Scroll to bottom"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: scrollToCenter,
    variant: "outline"
  }, "Scroll to center"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: scrollToTop,
    variant: "outline"
  }, "Scroll to top")));
}
const scrollTo = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollTo = scrollTo;
//# sourceMappingURL=scrollTo.js.map
