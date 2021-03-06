import React from 'react';
import { MantineSize } from '@mantine/core';
import type { createTimeHandler } from '../create-time-handler/create-time-handler';
interface TimeFieldProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
    /** Called with onChange event */
    onChange: ReturnType<typeof createTimeHandler>;
    /** Called to set input value and bypass parent validation/onChange calls */
    setValue(value: string): void;
    /** Adds colon after the field */
    withSeparator?: boolean;
    /** Colon text size */
    size?: MantineSize;
    /** Maximum possible value */
    max?: number;
    /** Minimum possible value. Default 0 */
    min?: number;
}
export declare const TimeField: React.ForwardRefExoticComponent<TimeFieldProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TimeField.d.ts.map