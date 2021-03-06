import React from 'react';
import { DefaultProps, ClassNames, MantineSize } from '@mantine/core';
import { CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import useStyles from './YearPicker.styles';
export declare type YearPickerStylesNames = ClassNames<typeof useStyles> | CalendarHeaderStylesNames;
export interface YearPickerProps extends DefaultProps<YearPickerStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    value: number;
    onChange(value: number): void;
    minYear?: number;
    maxYear?: number;
    size?: MantineSize;
    __staticSelector?: string;
    nextDecadeLabel?: string;
    previousDecadeLabel?: string;
    preventFocus?: boolean;
}
export declare function YearPicker({ className, styles, classNames, value, onChange, size, minYear, maxYear, __staticSelector, nextDecadeLabel, previousDecadeLabel, preventFocus, ...others }: YearPickerProps): JSX.Element;
export declare namespace YearPicker {
    var displayName: string;
}
//# sourceMappingURL=YearPicker.d.ts.map