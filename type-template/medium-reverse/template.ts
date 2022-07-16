type Reverse<T extends any[]> = T extends [...infer First, infer Last]
  ? [Last, ...Reverse<First>]
  : T;
