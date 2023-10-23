let prompt = require('prompt-sync')();

const input = prompt('Введіть число, яке шукається: ');

if (isNaN(input)) {
  console.log('Введено не число. Будь ласка, введіть числове значення.');
} else {
  const factorial = parseInt(input);
  
  const result = factor(factorial);

  function factor(a) {
    if (a <= 1) {
      return 1;
    }
    return a * factor(a - 1);
  }

  console.log(`Факторіал числа ${factorial} дорівнює ${result}`);
}
//npm i prompt-sync