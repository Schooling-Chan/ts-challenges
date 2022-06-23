type isEmpty<T> = T extends "+" | "-" ? T : never;
type Get<T> = T extends `${isEmpty<infer P>}${infer F}` ? [P, F] : ["", T];
type PercentageParser<A extends string> = A extends `${infer R}%`
  ? [...Get<R>, "%"]
  : [...Get<A>, ""];
