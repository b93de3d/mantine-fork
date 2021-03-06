import React from 'react';
import { FirstDayOfWeek } from '../../types';
import { CalendarSharedProps } from '../CalendarBase/CalendarBase';
import { DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';
export interface DateRangePickerProps extends Omit<DatePickerBaseSharedProps, 'value' | 'onChange'>, Omit<CalendarSharedProps, 'size' | 'styles' | 'classNames' | 'value' | 'onChange'> {
    /** Selected date, required with controlled input */
    value?: [Date | null, Date | null];
    /** Called when date range changes */
    onChange?(value: [Date | null, Date | null]): void;
    /** Default value for uncontrolled input */
    defaultValue?: [Date | null, Date | null];
    /** Set to false to force dropdown to stay open after date was selected */
    closeCalendarOnChange?: boolean;
    /** dayjs input format */
    inputFormat?: string;
    /** Control initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Input name, useful fon uncontrolled variant to capture data with native form */
    name?: string;
    /** Separator between dates */
    labelSeparator?: string;
    /** Set first day of the week */
    firstDayOfWeek?: FirstDayOfWeek;
    /** Allow one date to be selected as range */
    allowSingleDateInRange?: boolean;
    /** Allows to show multiple months */
    amountOfMonths?: number;
}
export declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=DateRangePicker.d.ts.map