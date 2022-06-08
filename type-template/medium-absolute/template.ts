type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer L}`
  ? L
  : `${T}`;
