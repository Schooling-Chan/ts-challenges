type Diff<O, O1> = {
  [K in keyof O | keyof O1 as [K & keyof O & keyof O1] extends [never]
    ? K
    : never]: K extends keyof O1 ? O1[K] : O[K & keyof O];
};
// type Diff<O, O1> = Omit<O & O1, keyof O & keyof O1>;
