type Pop<T extends any[]> = T extends [...infer V, infer U] ? [...V] : never;
