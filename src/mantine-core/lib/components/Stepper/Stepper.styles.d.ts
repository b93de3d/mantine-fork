import { MantineNumberSize, MantineColor, MantineSize } from '@mantine/styles';
interface StepperStyles {
    contentPadding: MantineNumberSize;
    iconSize?: number;
    size: MantineSize;
    color: MantineColor;
    orientation: 'vertical' | 'horizontal';
    iconPosition: 'right' | 'left';
    breakpoint: MantineNumberSize;
}
declare const _default: (params: StepperStyles, options?: import("@mantine/styles").UseStylesOptions<"content" | "separator" | "root" | "steps" | "separatorActive">) => {
    classes: Record<"content" | "separator" | "root" | "steps" | "separatorActive", string>;
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Stepper.styles.d.ts.map