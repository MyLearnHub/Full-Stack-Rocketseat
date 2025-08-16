# Métodos De Texto

---

## Texto Maiúsculo e Minúsculo

```js
let message = "Estou estudando os fundamentos do Javascript."

console.log(message);

// Exibir o texto em maiúsculo.
console.log(message.toUpperCase());

// Exibir o texto em minúsculo.
console.log(message.toLowerCase());
```

## Obtendo o Comprimento de Uma String

```js
let message = "Estou estudando os fundamentos do Javascript."

// Comprimento de uma string.
console.log(message.length);

let password = "12345";

if(password.length < 6) {
	console.log("A senha deve ter ao menos 6 caracteres");
}; 

// Quantos digitos tem um número.
let value = 12345;
console.log(String(value).length);
console.log(value.toString().length);
```

## Substituindo e Fatiando Um Texto

```js
let message = "Estou estudando os fundamentos do Javascript."

// Substituindo parte de um texto.
/* 
console.log(message.replace("os fundamentos do Javascript", "Métodos de String"));
console.log(message);
*/

// Extraindo uma parte da string (start, end).
console.log(message.slice(6, 30));

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11));

let textWithSpace = "    Texto de exemplo   ";
console.log(textWithSpace.length);

// Remove espaços em branco no início e no final da string.
console.log(textWithSpace.trim().length);
```

## Completando Uma String

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

## Separando e Unindo Strings

```js
let text = "Estudar, Aprender, Praticar";

// Separar a String.
let separate = text.split(",");
console.log(separate);

let message = "Estou aprendendo Javascript"
console.log(message.split(" "));

// Unir a String.
let joined = separate.join(" - ");
console.log(joined);
```

## Encontrando um Conteúdo no Texto

```js
let message = "Estou estudando os fundamentos do Javascript";

// Obtém a posição da palavra.
console.log(message.indexOf("Javascript"));

// Quando não encontra retorna -1
// console.log(message.indexOf("javascript"));

// Verifica se existe a palavra na String.
console.log(message.includes("Javascript"));
// console.log(message.toUpperCase().includes("JAVASCRIPT"));

console.log(message.includes("HTML"));
console.log(message.includes("estudando os fundamentos"));
```
