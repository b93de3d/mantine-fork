'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { size }) => ({
  timeInput: {},
  disabled: {
    opacity: 0.6,
    cursor: "not-allowed"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    height: theme.fn.size({ size, sizes: core.INPUT_SIZES }) - 2
  }
}));

exports.default = useStyles;
//# sourceMappingURL=TimeInput.styles.js.map
