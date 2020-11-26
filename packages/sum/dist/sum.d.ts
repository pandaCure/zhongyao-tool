
declare interface IName {
    name: string;
    age: number;
}

declare const name_2: IName;
export { name_2 as name }

/**
 * @param  a - number 数字1
 * @param  b - number 数字2
 * @returns number
 */
export declare const sum: (a: number, b: number) => number;

export { }
