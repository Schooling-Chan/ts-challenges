type Merge<TObject> = {
  [key in keyof TObject]: TObject[key];
};

export type RequiredByKeys<TObject, TKeys = keyof TObject> = Merge<
  {
    [key in keyof TObject as key extends TKeys ? key : never]-?: TObject[key];
  } & {
    [key in keyof TObject as key extends TKeys ? never : key]: TObject[key];
  }
>;
