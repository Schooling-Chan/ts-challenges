type Push<T extends any[], U> = [...T, U];

type Unshift<T extends any[], U> = [U, ...T];
