type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [K in T[number]]: K; // get tuple element type
};
