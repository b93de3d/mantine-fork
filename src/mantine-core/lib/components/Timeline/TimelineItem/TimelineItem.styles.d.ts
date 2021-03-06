import { MantineColor, MantineNumberSize } from '@mantine/styles';
interface TimelineItemStyles {
    bulletSize: number;
    color: MantineColor;
    radius: MantineNumberSize;
    align: 'right' | 'left';
    lineVariant: 'solid' | 'dashed' | 'dotted';
    lineWidth: number;
}
declare const _default: (params: TimelineItemStyles, options?: import("@mantine/styles").UseStylesOptions<"item" | "itemTitle" | "itemBody" | "itemContent" | "itemBulletWithChild" | "itemBullet" | "itemLineActive" | "itemActive">) => {
    classes: Record<"item" | "itemTitle" | "itemBody" | "itemContent" | "itemBulletWithChild" | "itemBullet" | "itemLineActive" | "itemActive", string>;
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=TimelineItem.styles.d.ts.map