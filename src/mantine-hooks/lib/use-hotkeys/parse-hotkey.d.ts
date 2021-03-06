/// <reference types="react" />
export declare type KeyboardModifiers = {
    alt: boolean;
    ctrl: boolean;
    meta: boolean;
    mod: boolean;
    shift: boolean;
};
export declare type Hotkey = KeyboardModifiers & {
    key?: string;
};
declare type CheckHotkeyMatch = (event: KeyboardEvent) => boolean;
export declare function parseHotkey(hotkey: string): Hotkey;
export declare function getHotkeyMatcher(hotkey: string): CheckHotkeyMatch;
declare type HotkeyItem = [string, (event: React.KeyboardEvent<HTMLElement>) => void];
export declare function getHotkeyHandler(hotkeys: HotkeyItem[]): (event: React.KeyboardEvent<HTMLElement>) => void;
export {};
//# sourceMappingURL=parse-hotkey.d.ts.map