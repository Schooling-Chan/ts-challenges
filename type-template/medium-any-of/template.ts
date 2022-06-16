type False = 0 | "" | false | [] | Record<string, never>;
type AnyOf<T extends readonly any[]> = T extends [infer L, ...infer R]
  ? L extends False
    ? AnyOf<R>
    : true
  : false;
