import React from 'react';
import { DefaultProps, MantineSize, ClassNames } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { DayStylesNames } from './Day/Day';
import { DayKeydownPayload, DayModifiers } from './types';
import useStyles from './Month.styles';
export interface MonthSettings {
    /** Adds className to day button based on date and modifiers */
    dayClassName?(date: Date, modifiers: DayModifiers): string;
    /** Adds style to day button based on date and modifiers */
    dayStyle?(date: Date, modifiers: DayModifiers): React.CSSProperties;
    /** When true dates that are outside of given month cannot be clicked or focused */
    disableOutsideEvents?: boolean;
    /** Minimum possible date */
    minDate?: Date;
    /** Maximum possible date */
    maxDate?: Date;
    /** Callback function to determine if day should be disabled */
    excludeDate?(date: Date): boolean;
    /** Set to false to remove weekdays row */
    hideWeekdays?: boolean;
    /** Controls month days font-size and height */
    size?: MantineSize;
    /** Set to true to make calendar take 100% of container width */
    fullWidth?: boolean;
    /** Prevent focusing upon clicking */
    preventFocus?: boolean;
    /** Should focusable days have tabIndex={0}? */
    focusable?: boolean;
    /** Set first day of the week */
    firstDayOfWeek?: FirstDayOfWeek;
    /** Remove outside dates */
    hideOutsideDates?: boolean;
    /** Should date be displayed as in range */
    isDateInRange?(date: Date, modifiers: DayModifiers): boolean;
    /** Should date be displayed as first in range */
    isDateFirstInRange?(date: Date, modifiers: DayModifiers): boolean;
    /** Should date be displayed as last in range */
    isDateLastInRange?(date: Date, modifiers: DayModifiers): boolean;
}
export declare type MonthStylesNames = ClassNames<typeof useStyles> | DayStylesNames;
export interface MonthProps extends DefaultProps<MonthStylesNames>, MonthSettings, Omit<React.ComponentPropsWithoutRef<'table'>, 'onChange' | 'value'> {
    /** Date at which month should be shown */
    month: Date;
    /** Locale is used to get weekdays names with dayjs format */
    locale?: string;
    /** Selected date */
    value?: Date;
    /** Selected range */
    range?: [Date, Date];
    /** Called when day is selected */
    onChange?(value: Date): void;
    /** Static css selector base */
    __staticSelector?: string;
    /** Called when onMouseEnter event fired on day button */
    onDayMouseEnter?(date: Date, event: React.MouseEvent): void;
    /** Get days buttons refs */
    daysRefs?: HTMLButtonElement[][];
    /** Called when keydown event is registered on day */
    onDayKeyDown?(payload: DayKeydownPayload, event: React.KeyboardEvent<HTMLButtonElement>): void;
}
export declare const Month: React.ForwardRefExoticComponent<MonthProps & React.RefAttributes<HTMLTableElement>>;
//# sourceMappingURL=Month.d.ts.map