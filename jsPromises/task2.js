function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json());
}

const resultAll = Promise.all([getTodo(), getUser()]);

resultAll
  .then((data) => {
    console.log('Result Promise.all: ', data);
  })
  .catch((error) => {
    console.log('Error Promise.all: ', error);
  });

const resultRace = Promise.race([getTodo(), getUser()]);

resultRace
  .then((data) => {
    console.log('Result Promice.race: ', data);
  })
  .catch((error) => {
    console.log('Error Promice.race: ', error);
  });
