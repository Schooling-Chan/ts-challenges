type Last<T extends any[]> = T extends [...infer V, infer L] ? L : never;
