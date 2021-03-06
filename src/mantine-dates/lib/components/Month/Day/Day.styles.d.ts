import { MantineSize } from '@mantine/core';
interface DayStyles {
    size: MantineSize;
    fullWidth: boolean;
    hideOutsideDates: boolean;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: DayStyles, options?: import("@mantine/core").UseStylesOptions<"selected" | "weekend" | "outside" | "inRange" | "firstInRange" | "lastInRange" | "day">) => {
    classes: Record<"selected" | "weekend" | "outside" | "inRange" | "firstInRange" | "lastInRange" | "day", string>;
    cx: (...args: any) => string;
    theme: import("@mantine/core").MantineTheme;
};
export default _default;
//# sourceMappingURL=Day.styles.d.ts.map