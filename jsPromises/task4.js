class TodoService {
    async getTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    }
}

class UserService {
    async getUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    }
}


async function runClassTasks() {
    const todoService = new TodoService();
    const userService = new UserService();

    try {
        const allResults = await Promise.all([
            todoService.getTodo(), 
            userService.getUser()
        ]);
        
        console.log("Result from classes: ", allResults);

        const raceResult = await Promise.race([
            todoService.getTodo(), 
            userService.getUser()
        ]);
        
        console.log("Result of Race: ", raceResult);

    } catch (e) {
        console.log("Error: ", e);
    }
}

runClassTasks();
