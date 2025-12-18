let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

person.email = 'johndoe@email.example';
delete person.age;

console.log(person);
