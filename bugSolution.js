function foo(a, b) {
  //Explicit type conversion
  return Number(a) + Number(b);
}
console.log(foo(1, "1")); // Output: 2