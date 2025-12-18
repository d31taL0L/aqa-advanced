const number = 7;

console.log('"for" loop:');
for (let i = 1; i <= 10; i++) {
  let output = `${number} * ${i} = ${number * i}`;
  console.log(output);
}

console.log(`\n`);

console.log('"while" loop:');
let i = 1;
while (i <= 10) {
  let output = `${number} * ${i} = ${number * i}`;
  console.log(output);
  i++;
}
