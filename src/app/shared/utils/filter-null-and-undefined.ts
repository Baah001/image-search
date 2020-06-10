export const filterNullsAndUndefined = <T>(el: T | undefined | null): el is T => !(el === null || el === undefined);
