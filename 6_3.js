function getSumFunction(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
const sumFunction = getSumFunction(5);
const sum = sumFunction(5);
console.log(sum);