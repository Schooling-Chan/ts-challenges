/**
 * recursive type
 */
type TrimCharacter = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${TrimCharacter}${infer T}`
  ? TrimLeft<T>
  : S;
