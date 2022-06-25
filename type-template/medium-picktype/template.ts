type PickByType<T, U> = {
  [K in keyof T as U extends T[K] ? K : never]: T[K];
};
