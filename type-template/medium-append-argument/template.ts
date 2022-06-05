type AppendArgument<Fn, A> = Fn extends (...arg: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never;

/**
   * type AppendLast<A extends any[],B> = [...A,B];

type AppendArgument<Fn extends (...args:any[])=>any, A> = ((...args:AppendLast<Parameters<Fn>,A>)=>ReturnType<Fn>)
   */
