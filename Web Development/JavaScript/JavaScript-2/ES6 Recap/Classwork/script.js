// 1.
const currentYear = 2025;
console.log(currentYear);

// 2.
let counter = 0;
counter += 1;
console.log(counter);

// 3.
const PI = 3.14159;
console.log(PI);

// 4.
const Area = (radius) => PI * radius ** 2;
console.log(Area(10));

// 5.
const product = (a, b) => a * b;
console.log(product(2, 3));

// 6.
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log(isPrime(5));
console.log(isPrime(4));

// 7.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
};
const { title, author} = book;
console.log(title);
console.log(author);

// 8.
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);
console.log(third);