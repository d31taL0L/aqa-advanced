async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
}


async function runTasks() {
    try {
        const allResults = await Promise.all([ getTodo(), getUser() ]);
        console.log("Result Promise.all:", allResults);


        const raceResult = await Promise.race([ getTodo(), getUser() ]);
        console.log("Result Promise.race:", raceResult);

    } catch (error) {
        console.log("Error: ", error);
    }
}

runTasks();