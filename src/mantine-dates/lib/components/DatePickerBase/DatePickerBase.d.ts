import React from 'react';
import { DefaultProps, InputBaseProps, InputWrapperBaseProps, MantineTransition, InputStylesNames, InputWrapperStylesNames, MantineSize, MantineShadow, ClassNames } from '@mantine/core';
import { CalendarBaseStylesNames } from '../CalendarBase/CalendarBase';
import useStyles from './DatePickerBase.styles';
export declare type DatePickerStylesNames = ClassNames<typeof useStyles> | CalendarBaseStylesNames | InputStylesNames | InputWrapperStylesNames;
export interface DatePickerBaseSharedProps extends InputBaseProps, InputWrapperBaseProps, DefaultProps<DatePickerStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'defaultValue' | 'placeholder' | 'size'> {
    /** Props spread to root element (InputWrapper) */
    wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
    /** Placeholder, displayed when date is not selected */
    placeholder?: string;
    /** Dropdown appear/disappear transition */
    transition?: MantineTransition;
    /** Dropdown appear/disappear transition duration */
    transitionDuration?: number;
    /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or css value for custom box-shadow */
    shadow?: MantineShadow;
    /** Input name, useful fon uncontrolled variant to capture data with native form */
    name?: string;
    /** Set to true to disable dropdown closing on scroll */
    closeDropdownOnScroll?: boolean;
    /** Input size */
    size?: MantineSize;
    /** Where to show calendar in modal or popover */
    dropdownType?: 'popover' | 'modal';
    /** Allow to clear value */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** useEffect dependencies to force update tooltip position */
    positionDependencies?: any[];
    /** Popper zIndex */
    zIndex?: number;
    /** call onChange with last valid value onBlur */
    fixOnBlur?: boolean;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Called when dropdown opens */
    onDropdownOpen?(): void;
    /** Called when dropdown closes */
    onDropdownClose?(): void;
    /** Events that should trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Modal z-index */
    modalZIndex?: number;
}
export interface DatePickerBaseProps extends DatePickerBaseSharedProps {
    /** Internal prop to set input label */
    inputLabel?: string;
    /** Static css selector base */
    __staticSelector?: string;
    /** Controls dropdown opened state */
    dropdownOpened: boolean;
    /** Called when dropdown opened state changes */
    setDropdownOpened(opened: boolean): void;
    /** Called when clear button in clicked */
    onClear(): void;
    /** Allow free input */
    allowFreeInput?: boolean;
    /** Amount of months */
    amountOfMonths?: number;
}
export declare const DatePickerBase: React.ForwardRefExoticComponent<DatePickerBaseProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=DatePickerBase.d.ts.map