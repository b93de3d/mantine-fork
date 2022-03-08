import React, { useState } from 'react';
import { useMantineTheme, Group, Button } from '@mantine/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { dropzoneChildren } from './_base.js';

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
  const [disabled, setDisabled] = useState(true);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: disabled ? "blue" : "red",
    onClick: () => setDisabled((d) => !d)
  }, disabled ? "Enable" : "Disable", " full screen dropzone")), /* @__PURE__ */ React.createElement(FullScreenDropzone, {
    disabled,
    accept: IMAGE_MIME_TYPE,
    onDrop: (files) => {
      console.log(files);
      setDisabled(true);
    }
  }, (status) => dropzoneChildren(status, theme)));
}
const fullScreen = {
  type: "demo",
  component: Demo,
  code
};

export { fullScreen };
//# sourceMappingURL=fullScreen.js.map
