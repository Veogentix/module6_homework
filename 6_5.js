const x = +prompt("Введите натуральное число");
if (x <= 0 || isNaN(x)) {
  alert("Ошибка! Вы ввели не натуральное число");
} else {
  const n = +prompt("Введите второе натуральное число");
  if (x <= 0 || isNaN(x)) {
    alert("Ошибка! Вы ввели не натуральное число");
  } else {
    const result = (x, n) => x ** n;
    console.log(`${x} в степени ${n} ровняется ${result(x, n)}`);
  }
}