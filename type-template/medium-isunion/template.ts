type IsUnion<T, T1 = T> = T extends T1
  ? [T1] extends [T]
    ? false
    : true
  : false;
