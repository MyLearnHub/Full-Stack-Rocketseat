# Completando Uma String

---

```js
const creditCard = "1234567812344928";
// console.log(creditCard.length);

// pega os 4 últimos dígitos.
const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

// O padStart preenche a string do início.
const maskedNumber = lastDigits.padStart(creditCard.length, "X");
console.log(maskedNumber);

// O padEnd preenche a string no final.
const number = "123";
console.log(number.padEnd(10, "#"));
```
