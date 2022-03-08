import { createStyles } from '@mantine/styles';
import { THUMB_SIZES } from '../Thumb/Thumb.styles.js';

var useStyles = createStyles((theme, { size }, getRef) => {
  const sliderThumb = { ref: getRef("sliderThumb") };
  return {
    sliderThumb,
    slider: {
      position: "relative",
      height: theme.fn.size({ size, sizes: THUMB_SIZES }) + 2,
      boxSizing: "border-box",
      marginLeft: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
      marginRight: theme.fn.size({ size, sizes: THUMB_SIZES }) / 2,
      outline: 0,
      [`&:focus .${sliderThumb.ref}`]: {
        outline: "none",
        boxShadow: `0 0 0 1px ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white}, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]}`
      },
      [`&:focus:not(:focus-visible) .${sliderThumb.ref}`]: {
        boxShadow: "none"
      }
    },
    sliderOverlay: {
      position: "absolute",
      boxSizing: "border-box",
      top: 0,
      bottom: 0,
      left: -theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1,
      right: -theme.fn.size({ size, sizes: THUMB_SIZES }) / 2 - 1,
      borderRadius: 1e3
    }
  };
});

export default useStyles;
//# sourceMappingURL=ColorSlider.styles.js.map
