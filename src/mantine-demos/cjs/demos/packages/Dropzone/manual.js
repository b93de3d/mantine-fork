'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef();
  return (
    <>
      <Dropzone openRef={openRef}>
        {/* children */}
      </Dropzone>

      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}


`;
function Demo() {
  const openRef = React.useRef();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    openRef
  }), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => openRef.current()
  }, "Select files")));
}
const manual = {
  type: "demo",
  component: Demo,
  code
};

exports.manual = manual;
//# sourceMappingURL=manual.js.map
