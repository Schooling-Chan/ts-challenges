type Trim<S extends string> = S extends
  | `${TrimCharacter}${infer T}`
  | `${infer T}${TrimCharacter}`
  ? Trim<T>
  : S;
