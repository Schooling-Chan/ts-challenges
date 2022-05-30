/**
 *
 * @param values const readonly
 * @returns Promise<readonly T[]>
 */

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;
