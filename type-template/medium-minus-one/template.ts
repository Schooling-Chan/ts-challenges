type MinusOne<T extends number, P extends any[] = []> = [
  ...P,
  unknown
]["length"] extends T
  ? P["length"]
  : MinusOne<T, [...P, unknown]>;
