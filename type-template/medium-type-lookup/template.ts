/**
 * Sometimes, you may want to lookup for a type in a union to by their attributes.

In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
 */
type LookUp<T extends { type: string }, K extends T["type"]> = T extends {
  type: K;
}
  ? T
  : never;
