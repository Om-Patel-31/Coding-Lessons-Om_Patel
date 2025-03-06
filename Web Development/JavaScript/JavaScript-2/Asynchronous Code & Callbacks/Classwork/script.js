// 4. and 5.
console.log("A: 5");
console.log("B: 6");
console.log("C: 3");
console.log("D: 2");
console.log("E: 4");
console.log("F: 1");

// 6.
function downloadFile(url, callback) {
    setTimeout(() => {
        const message = `File downloaded from ${url}`;
        callback(message);
    }, 3000);
}

// 7.
