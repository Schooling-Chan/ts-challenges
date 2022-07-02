// export type PartialByKeys<T, K extends keyof T> = {
//   [key in K]?: T[key];
// } & {
//   [key in Exclude<keyof T, K>]?: T[key];
// };
export type Raw<O> = {
  [K in keyof O]: O[K];
};

export type PartialByKeys<T, K = keyof any> = Raw<
  {
    [Key in Exclude<keyof T, K>]: T[Key];
  } & {
    // 这里不能使用 T[Key]，需要加个判断，这是为什么？
    [Key in K as Key extends keyof T ? Key : never]?: Key extends keyof T
      ? T[Key]
      : never;
  }
>;
