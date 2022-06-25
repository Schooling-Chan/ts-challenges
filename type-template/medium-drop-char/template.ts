type DropChar<
  S extends string,
  C extends string
> = S extends `${infer F}${infer Rest}`
  ? `${F extends C ? "" : F}${DropChar<Rest, C>}`
  : S;
