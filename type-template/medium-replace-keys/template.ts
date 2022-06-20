type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? Y[keyof Y & K] : U[K];
};
