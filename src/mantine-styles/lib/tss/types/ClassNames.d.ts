/** Extracts class names from useStyles hook */
export declare type ClassNames<T extends (...args: any) => {
    classes: Record<string, any>;
    cx: (...cx: any) => string;
}> = keyof ReturnType<T>['classes'];
//# sourceMappingURL=ClassNames.d.ts.map