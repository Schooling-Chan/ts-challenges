/**
 * Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
 */
type MyCapitalize<S extends string> = S extends `${infer U}${infer K}`
  ? `${Uppercase<U>}${K}`
  : S;
