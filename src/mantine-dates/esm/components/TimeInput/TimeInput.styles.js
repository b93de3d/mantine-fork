import { createStyles, INPUT_SIZES } from '@mantine/core';

var useStyles = createStyles((theme, { size }) => ({
  timeInput: {},
  disabled: {
    opacity: 0.6,
    cursor: "not-allowed"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2
  }
}));

export default useStyles;
//# sourceMappingURL=TimeInput.styles.js.map
