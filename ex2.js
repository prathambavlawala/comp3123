const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

console.log(capitalize('fooBar'));  // Output: Foobar
console.log(capitalize('nodeJs'));  // Output: Nodejs
