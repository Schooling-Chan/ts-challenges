/**
 * string hasn't a length property
 * so we convert it to array
 */
type StrToArr<S extends string> = S extends `${infer L}${infer Rest}`
  ? [L, ...StrToArr<Rest>]
  : [];
type LengthOfString<S extends string> = StrToArr<S>["length"];
