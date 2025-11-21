function squareDecloration(width, height) {
    let result = width * height;
    return result;
}

const squareExpression = function(width, height) {
    let result = width * height;
    return result;
}

const squareArrowFunction = (width, height) => {
    let result = width * height;
    return result;
}

let resultDecloration = squareDecloration(9, 2);
let resultExpression = squareExpression(5, 10);
let resultArrowFunction = squareArrowFunction(4, 6);

console.log(`squareDecloration: ${resultDecloration}`);
console.log(`squareExpression: ${resultExpression}`);
console.log(`squareArrowFunction: ${resultArrowFunction}`);