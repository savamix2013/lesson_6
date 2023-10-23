let prompt = require('prompt-sync')();

const input = prompt('Введіть число, яке шукається: ');

if (isNaN(input)) {
  console.log('Введено не число. Будь ласка, введіть числове значення.');
} else {
  const n = parseInt(input);
  
  const result = fibonacci(n);

  function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log(`Число Фібоначчі з індексом ${n} дорівнює ${result}`);
}
//npm i prompt-sync