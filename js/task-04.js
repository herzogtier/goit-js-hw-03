const countTotalSalary = function (employees) {
  "use strict";
  let total = 0;
  let keys = Object.keys(employees);
  for (const key of keys) {
    total += employees[key];
  }
  return total;
  // Write code under this line
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
