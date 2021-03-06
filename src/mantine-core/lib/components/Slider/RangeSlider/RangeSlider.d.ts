import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor } from '@mantine/styles';
import { MantineTransition } from '../../Transition';
import { ThumbStylesNames } from '../Thumb/Thumb';
import { TrackStylesNames } from '../Track/Track';
import { MarksStylesNames } from '../Marks/Marks';
import { SliderRootStylesNames } from '../SliderRoot/SliderRoot';
export declare type RangeSliderStylesNames = SliderRootStylesNames | ThumbStylesNames | TrackStylesNames | MarksStylesNames;
declare type Value = [number, number];
export interface RangeSliderProps extends DefaultProps<RangeSliderStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange' | 'defaultValue'> {
    /** Color from theme.colors */
    color?: MantineColor;
    /** Track border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined track and thumb size, number to set sizes in px */
    size?: MantineNumberSize;
    /** Minimal possible value */
    min?: number;
    /** Maximum possible value */
    max?: number;
    /** Minimal range interval */
    minRange?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows */
    step?: number;
    /** Current value for controlled slider */
    value?: Value;
    /** Default value for uncontrolled slider */
    defaultValue?: Value;
    /** Called each time value changes */
    onChange?(value: Value): void;
    /** Hidden input name, use with uncontrolled variant */
    name?: string;
    /** Marks which will be placed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Function to generate label or any react node to render instead, set to null to disable label */
    label?: React.ReactNode | ((value: number) => React.ReactNode);
    /** Label appear/disappear transition */
    labelTransition?: MantineTransition;
    /** Label appear/disappear transition duration in ms */
    labelTransitionDuration?: number;
    /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
    labelTransitionTimingFunction?: string;
    /** If true label will be not be hidden when user stops dragging */
    labelAlwaysOn?: boolean;
    /** First thumb aria-label */
    thumbFromLabel?: string;
    /** Second thumb aria-label */
    thumbToLabel?: string;
    /**If true slider label will appear on hover */
    showLabelOnHover?: boolean;
    /** Thumbs children, can be used to add icons */
    thumbChildren?: React.ReactNode;
}
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=RangeSlider.d.ts.map