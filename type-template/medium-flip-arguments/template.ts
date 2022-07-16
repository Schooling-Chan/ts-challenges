type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Args
) => infer Return
  ? (...args: Reverse<Args>) => Return
  : never;
