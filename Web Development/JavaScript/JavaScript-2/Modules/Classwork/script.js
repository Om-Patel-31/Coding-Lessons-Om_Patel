// 1.
import { PI } from "./mathUtils";
let radius = 5;
const AreaOfCircle = (radius) => {
  return PI * radius * radius;
};
console.log(AreaOfCircle(radius));

// 2.
import { capitalizeFirstLetter } from "./stringUtils";
let string = "hello";
console.log(capitalizeFirstLetter(string));

// 3.
import { PI, AreaOfCircle } from "./mathUtils";
radius = 7;
console.log(AreaOfCircle(radius));

// 4.
import './deferredModule.js';

// 5.
//used in moduleB.js

// 6.
import { testStrictMode } from "./strictModeModule.js";
testStrictMode();

// 7.
// done in other files

// 8.
import {apiUrl, apiKey, timeout, retries} from "./configManager.js";
console.log(configManager.apiUrl);
console.log(configManager.apiKey);
console.log(configManager.timeout);
console.log(configManager.retries);

// 9.
import { getPrivateVar } from "./encapsulationModule.js";
console.log(getPrivateVar());