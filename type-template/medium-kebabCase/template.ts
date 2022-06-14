type Upper = "A" | "B" | "C" | "F";
type KebabCase<
  S extends string,
  T extends boolean = true //默认为true，首字母大写不加-
> = S extends `${infer F}${infer R}`
  ? `${F extends Upper
      ? `${T extends true ? "" : "-"}${Lowercase<F>}`
      : F}${KebabCase<R, false>}`
  : "";
