/**
 *  = keyof T(当不存在K时就赋值keyof)
 */
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>;
