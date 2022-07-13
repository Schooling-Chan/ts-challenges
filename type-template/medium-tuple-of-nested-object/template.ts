type TupleToNestedObject<T extends any[], U> = T extends [
  infer G extends PropertyKey,
  ...infer Rest
]
  ? { [key in G]: TupleToNestedObject<Rest, U> }
  : U;
