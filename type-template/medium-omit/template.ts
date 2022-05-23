// 工具类
// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>; // expected to be a string

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
