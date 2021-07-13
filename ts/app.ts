interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let typedIdentity: GenericIdentityFn<string> = identity;

let output = typedIdentity("Hello, world!");

console.log(output);