function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("Hello, world!");

console.log(output);