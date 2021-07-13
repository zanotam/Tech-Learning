function identity(arg) {
    return arg;
}
var typedIdentity = identity;
var output = typedIdentity("Hello, world!");
console.log(output);
