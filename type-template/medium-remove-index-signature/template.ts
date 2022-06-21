// for non-IndexSignature, K is "xxx" type string
// for IndexSignature, K is either string, number, symbol
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer _}` ? K : never]: T[K];
};
