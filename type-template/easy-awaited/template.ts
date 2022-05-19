/**
 * If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?
 * 解构promise类型
 * infer 获取类型里面的值,只能在条件类型里面使用
 *  递归获取两个类型
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;
