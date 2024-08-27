// 1. Basic Usage
let result = void (5 + 5);
console.log("Result of void(5 + 5):", result); // Outputs: undefined

// 2. Using void in an IIFE
void (function () {
  console.log("This is an Immediately Invoked Function Expression (IIFE)!");
})(); // Outputs: This is an Immediately Invoked Function Expression (IIFE)!

// 3. Using void to ignore return values
function importantFunction() {
  console.log("Executing importantFunction");
  return "This value is ignored by void";
}

void importantFunction(); // Outputs: Executing importantFunction

// 4. Using void in an array iteration to ignore return values
let numbers = [10, 20, 30];
numbers.forEach((number) => void console.log("Number:", number)); // Outputs each number

// 5. Using void in a context similar to an HTML link (demonstration only)
function pretendClick() {
  console.log("Pretend link was clicked, but nothing happens");
}

void pretendClick(); // Outputs: Pretend link was clicked, but nothing happens
