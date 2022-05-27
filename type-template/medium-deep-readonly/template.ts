/**
 * keyof T[P] search T[P] is Undefined
 */
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends undefined
    ? T[P]
    : DeepReadonly<T[P]>;
};
