// implement a generic First<T> that takes an Array T and returns it's first element's type.
/**
 * knowledge
 * if empty array, return never
 */
// 1
// type First<T extends any[]> = T extends [] ? never : T[0];

// 2
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 3. 对比第一个元素是否相等
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 4. infer可以在extends的条件语句中推断待推断的类型
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;
