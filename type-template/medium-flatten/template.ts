type Flatten<T extends any[]> = T extends [infer F, ...infer Rest]
  ? F extends Array<any>
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];
