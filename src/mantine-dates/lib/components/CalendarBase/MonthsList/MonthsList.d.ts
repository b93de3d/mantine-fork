import React from 'react';
import { DefaultProps } from '@mantine/core';
import { CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import { MonthProps, DayKeydownPayload, MonthStylesNames } from '../../Month';
export declare type MonthsListStylesNames = CalendarHeaderStylesNames | MonthStylesNames;
export interface MonthsListProps extends DefaultProps<MonthsListStylesNames>, Omit<MonthProps, 'styles' | 'classNames' | 'daysRefs' | 'onDayKeyDown'> {
    amountOfMonths: number;
    month: Date;
    locale: string;
    allowLevelChange: boolean;
    daysRefs: React.RefObject<HTMLButtonElement[][][]>;
    onMonthChange(month: Date): void;
    onNextLevel(): void;
    onDayKeyDown(monthIndex: number, payload: DayKeydownPayload, event: React.KeyboardEvent<HTMLButtonElement>): void;
    __staticSelector?: string;
    nextMonthLabel?: string;
    previousMonthLabel?: string;
    labelFormat?: string;
}
export declare function MonthsList({ amountOfMonths, month, locale, minDate, maxDate, allowLevelChange, size, daysRefs, onMonthChange, onNextLevel, onDayKeyDown, classNames, styles, __staticSelector, nextMonthLabel, previousMonthLabel, labelFormat, preventFocus, ...others }: MonthsListProps): JSX.Element;
export declare namespace MonthsList {
    var displayName: string;
}
//# sourceMappingURL=MonthsList.d.ts.map