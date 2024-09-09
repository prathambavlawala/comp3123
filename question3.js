function right(str) {
    
    const Char = str.slice(-3);
    const String = str.slice(0, -3);

    return Char + String;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));