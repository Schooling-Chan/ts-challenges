/**
 * Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. C is expected to be either true or false while T and F can be any type.
 */

type If<C extends boolean, T, F> = C extends true ? T : F;
