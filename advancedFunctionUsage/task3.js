function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}


const testCases = [
  {a: 10, b: 2},
  {a: 9, b: 0},
  {a: "8", b: 2},
  {a: 15, b: 3},
  {a: 5, b: "zero"},
];

for (const {a, b} of testCases) {
  try {
    const result = divide(a, b);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("The work is complete");
  }
}