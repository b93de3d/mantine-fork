import React from 'react';
import { InputBaseProps, InputWrapperBaseProps, InputStylesNames, InputWrapperStylesNames, DefaultProps, MantineSize, ClassNames } from '@mantine/core';
import useStyles from './TimeInput.styles';
export declare type TimeInputStylesNames = ClassNames<typeof useStyles> | InputStylesNames | InputWrapperStylesNames;
export interface TimeInputProps extends DefaultProps<TimeInputStylesNames>, InputBaseProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
    /** Input size */
    size?: MantineSize;
    /** Controlled input value */
    value?: Date | null;
    /** Uncontrolled input default value */
    defaultValue?: Date | null;
    /** Controlled input onChange handler */
    onChange?(value: Date): void;
    /** Display seconds input */
    withSeconds?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** Time format */
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
    /** Placeholder for hours/minutes/seconds inputs*/
    timePlaceholder?: string;
    /** Placeholder for am/pm input */
    amPmPlaceholder?: string;
    /** Disable field */
    disabled?: boolean;
    /** Ref to focus after final TimeInput field. Used by TimeRangeInput */
    nextRef?: React.RefObject<HTMLInputElement>;
}
export declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TimeInput.d.ts.map