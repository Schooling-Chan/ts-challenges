type Mutable<T extends Record<PropertyKey, unknown> | ReadonlyArray<unknown>> =
  {
    -readonly [K in keyof T]: T[K];
  };
