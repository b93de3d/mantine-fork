'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dropzone = require('@mantine/dropzone');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button } from '@mantine/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
        {disabled ? 'Enable' : 'Disable'} full screen dropzone
      </Button>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {/* See dropzone children in previous demo */}
      </FullScreenDropzone>
    </>
  );
}
`;
function Demo() {
  const [disabled, setDisabled] = React.useState(true);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    color: disabled ? "blue" : "red",
    onClick: () => setDisabled((d) => !d)
  }, disabled ? "Enable" : "Disable", " full screen dropzone")), /* @__PURE__ */ React__default.createElement(dropzone.FullScreenDropzone, {
    disabled,
    accept: dropzone.IMAGE_MIME_TYPE,
    onDrop: (files) => {
      console.log(files);
      setDisabled(true);
    }
  }, (status) => _base.dropzoneChildren(status, theme)));
}
const fullScreen = {
  type: "demo",
  component: Demo,
  code
};

exports.fullScreen = fullScreen;
//# sourceMappingURL=fullScreen.js.map
