import React from 'react';
import { FirstDayOfWeek } from '../../types';
import { CalendarSharedProps } from '../CalendarBase/CalendarBase';
import { DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';
export interface DatePickerProps extends Omit<DatePickerBaseSharedProps, 'onChange'>, Omit<CalendarSharedProps, 'size' | 'classNames' | 'styles'> {
    /** Selected date, required with controlled input */
    value?: Date | null;
    /** Called when date changes */
    onChange?(value: Date | null): void;
    /** Default value for uncontrolled input */
    defaultValue?: Date | null;
    /** Set to false to force dropdown to stay open after date was selected */
    closeCalendarOnChange?: boolean;
    /** dayjs input format */
    inputFormat?: string;
    /** Control initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Parser function for date provided by input typing */
    dateParser?: (value: string) => Date;
    /** Input name, useful for uncontrolled variant to capture data with native form */
    name?: string;
    /** Set first day of the week */
    firstDayOfWeek?: FirstDayOfWeek;
    /** Allow free input */
    allowFreeInput?: boolean;
}
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=DatePicker.d.ts.map