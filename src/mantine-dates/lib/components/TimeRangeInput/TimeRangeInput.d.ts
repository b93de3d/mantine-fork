import React from 'react';
import { InputBaseProps, InputWrapperBaseProps, InputStylesNames, InputWrapperStylesNames, DefaultProps, MantineSize, ClassNames } from '@mantine/core';
import useStyles from './TimeRangeInput.styles';
export declare type TimeRangeInputStylesNames = Exclude<ClassNames<typeof useStyles>, 'disabled'> | InputStylesNames | InputWrapperStylesNames;
export interface TimeRangeInputProps extends DefaultProps<TimeRangeInputStylesNames>, InputBaseProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
    /** Input size */
    size?: MantineSize;
    /** Controlled input value */
    value?: [Date | null, Date | null];
    /** Uncontrolled input default value */
    defaultValue?: [Date | null, Date | null];
    /** Controlled input onChange handler */
    onChange?(value: [Date, Date]): void;
    /** Display seconds input */
    withSeconds?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** The time format */
    format?: '12' | '24';
    /** Uncontrolled input name */
    name?: string;
    /** aria-label for hours input */
    hoursLabel?: string;
    /** aria-label for minutes input */
    minutesLabel?: string;
    /** aria-label for seconds input */
    secondsLabel?: string;
    /** aria-label for am/pm input */
    amPmLabel?: string;
    /** placeholder for time input */
    timePlaceholder?: string;
    /** placeholder for am/pm input */
    amPmPlaceholder?: string;
    /** Disable field */
    disabled?: boolean;
    /** Separator between time inputs */
    labelSeparator?: string;
}
export declare const TimeRangeInput: React.ForwardRefExoticComponent<TimeRangeInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TimeRangeInput.d.ts.map