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
let randomValue = Math.floor(Math.random() * 5000) + 1000;
function delayedAlert(message, callback) {
    setTimeout(() => {
        callback(message);
    }, randomValue);
}
delayedAlert("Alert 1!", alert);
delayedAlert("Alert 2!", alert);

// 8.
function someThing(callback) {
    setTimeout(() => {
        console.log("Do something");
        callback();
    });
}

// 9.
function someThing(callback) {
    setTimeout(() => {
        console.log("Do something");
        callback();
    });
}

// 10.
function doThirdThing(callback) {
    setTimeout(() => {
        console.log("Do third thing");
        callback();
    });
}

// 11.
function Calling() {
    someThing(() => {
        console.log("First anonymous callback!");
    someThingElse(() => {
        console.log("Second anonymous callback!");
    doThirdThing(() => {
        console.log("Third anonymous callback!");
            });
        });
    });
}