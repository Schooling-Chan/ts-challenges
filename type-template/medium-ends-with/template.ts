export type EndsWith<
  T extends string,
  U extends string
> = T extends `${infer Rest}${U}` ? true : false;
