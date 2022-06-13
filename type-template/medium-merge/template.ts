type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K & keyof F];
};
