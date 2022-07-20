type FlattenOnce<A extends any[], RES extends any[] = []> = A extends [
  infer A,
  ...infer R
]
  ? A extends [...infer B] // if a is array, 继续解析
    ? FlattenOnce<[...R], [...RES, ...B]>
    : FlattenOnce<[...R], [...RES, A]>
  : RES;

type FlattenDepth<
  A extends any[],
  D = 1,
  K extends any[] = []
> = FlattenOnce<A> extends A
  ? A
  : K["length"] extends D
  ? A
  : FlattenDepth<FlattenOnce<A>, D, [...K, 0]>;
