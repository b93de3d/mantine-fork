import React from 'react';
import { DefaultProps, MantineSize, ClassNames } from '@mantine/styles';
import { ColorSliderStylesNames } from './ColorSlider/ColorSlider';
import { SaturationStylesNames } from './Saturation/Saturation';
import { SwatchesStylesNames } from './Swatches/Swatches';
import { ThumbStylesNames } from './Thumb/Thumb';
import useStyles from './ColorPicker.styles';
export declare type ColorPickerStylesNames = ClassNames<typeof useStyles> | ColorSliderStylesNames | SwatchesStylesNames | SaturationStylesNames | ThumbStylesNames;
export interface ColorPickerBaseProps {
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when color changes */
    onChange?(color: string): void;
    /** Color format */
    format?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';
    /** Set to false to display swatches only */
    withPicker?: boolean;
    /** Predefined colors */
    swatches?: string[];
    /** Number of swatches displayed in one row */
    swatchesPerRow?: number;
    /** Predefined component size */
    size?: MantineSize;
}
export interface ColorPickerProps extends DefaultProps<ColorPickerStylesNames>, ColorPickerBaseProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
    /** Force picker to take 100% width of its container */
    fullWidth?: boolean;
    /** Should interactive elements be focusable */
    focusable?: boolean;
    /** Static selector base */
    __staticSelector?: string;
    /** Saturation slider aria-label */
    saturationLabel?: string;
    /** Hue slider aria-label */
    hueLabel?: string;
    /** Alpha slider aria-label */
    alphaLabel?: string;
}
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ColorPicker.d.ts.map