const car1 = {
  brand: 'Toyota',
  model: 'Camry',
  year: '2012',
};

const car2 = {
  brand: 'Lexus',
  model: 'LS400',
  owner: 'Danylo Voloshyn',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
