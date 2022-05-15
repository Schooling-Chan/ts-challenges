/**
 * Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example

 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
