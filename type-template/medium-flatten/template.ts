type Flatten<T extends any[]> = T extends [infer F, ...infer Rest]
  ? F extends Array<unknown>
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];
