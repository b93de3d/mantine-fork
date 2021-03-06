import React from 'react';
import { DefaultProps, ClassNames, MantineSize } from '@mantine/core';
import { CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import useStyles from './MonthPicker.styles';
export declare type MonthPickerStylesNames = ClassNames<typeof useStyles> | CalendarHeaderStylesNames;
export interface MonthPickerProps extends DefaultProps<MonthPickerStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    value: {
        year: number;
        month: number;
    };
    onChange(value: number): void;
    locale: string;
    year: number;
    onYearChange(year: number): void;
    onNextLevel(): void;
    size?: MantineSize;
    minDate?: Date;
    maxDate?: Date;
    __staticSelector?: string;
    nextYearLabel?: string;
    previousYearLabel?: string;
    preventFocus?: boolean;
}
export declare function MonthPicker({ className, styles, classNames, value, onChange, locale, year, onYearChange, onNextLevel, size, minDate, maxDate, __staticSelector, nextYearLabel, previousYearLabel, preventFocus, ...others }: MonthPickerProps): JSX.Element;
export declare namespace MonthPicker {
    var displayName: string;
}
//# sourceMappingURL=MonthPicker.d.ts.map