/**
 * Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.
 */
import type { Equal } from "@type-challenges/utils";

// ts 模块规范，如果ts没有使用import 那么就会判断是全局的类型，不需要导出
// 递归实现获取类型，每次取第一个元素的判断比较是否一致，如果不一致就递归下去
export type Includes<T extends readonly any[], U> = T extends [
  infer A,
  ...infer B
]
  ? Equal<A, U> extends true
    ? true
    : Includes<B, U>
  : false;
