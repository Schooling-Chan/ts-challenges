type Shift<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Rest]
  : never;
