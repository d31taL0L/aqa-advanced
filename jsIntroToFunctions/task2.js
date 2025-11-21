function ageCheck(age) {
    if (age >= 18) {
        console.log('The user is an adult');
    } else if (age < 18) {
        console.log('The user is not an adult');
    } else {
        console.log(`Unknown symbol: ${age}`);
    }
}

ageCheck(25);
ageCheck(15);