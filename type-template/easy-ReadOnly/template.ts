/**
 * Implement the built-in Readonly<T> generic without using it.
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
