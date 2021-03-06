import React from 'react';
import { CalendarBaseProps } from '../CalendarBase/CalendarBase';
export interface RangeCalendarProps extends Omit<CalendarBaseProps, 'value' | 'onChange'> {
    /** Selected dates */
    value: [Date | null, Date | null];
    /** Called when selected date changes */
    onChange(value: [Date, Date]): void;
    /** Allow one date to be selected as range */
    allowSingleDateInRange?: boolean;
}
export declare const RangeCalendar: React.ForwardRefExoticComponent<RangeCalendarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=RangeCalendar.d.ts.map