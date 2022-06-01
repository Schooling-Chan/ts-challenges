type TrimRight<S extends string> = S extends `${infer T}${TrimCharacter}`
  ? TrimRight<T>
  : S;
