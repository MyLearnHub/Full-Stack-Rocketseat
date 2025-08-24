# Módulos

---

## Conhecendo o ES Modules

![image.png](assets/aula04-1.png)

![image.png](assets/aula04-2.png)

## Criando os Módulos

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aulas de Javascript</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>
```

main.js

```js
import { sum, multiply } from "./calc.js"

console.log("4 + 6 =", sum(4, 6));
console.log("4 * 6 =", multiply(4, 6));
```

calc.js

```js
export function sum(a, b) {
	return a + b;
};

export function multiply(a, b) {
	return a * b;
};
```

calc.js (alternativa)

```js
function sum(a, b) {
	return a + b;
};

function multiply(a, b) {
	return a * b;
};

export { sum, multiply };
```

## Importando Tudo

```js
import * as calc from "./calc.js"

console.log("4 + 6 =", calc.sum(4, 6));
console.log("4 * 6 =", calc.multiply(4, 6));
```

## Exportação Padrão ou Nomeada

main.js

```js
import sum, { multiply } from "./calc.js"

console.log("4 + 6 =", sum(4, 6));
console.log("4 * 6 =", multiply(4, 6));
```

calc.js

```js
// default export - é a função padrão fornecida pelo módulo.
export default function sum(a, b) {
	return a + b;
};

// named export - cada método é importado pelo seu próprio nome de exportação.
export function multiply(a, b) {
	return a * b;
};
```

## Renomeando as Exportações

main.js

```js
import { sumTwoNumbers, multiplyTwoNumbers } from "./calc.js"

console.log("4 + 6 =", sumTwoNumbers(4, 6));
console.log("4 * 6 =", multiplyTwoNumbers(4, 6));
```

calc.js

```js
function sum(a, b) {
	return a + b;
};

function multiply(a, b) {
	return a * b;
};

export { 
	sum as sumTwoNumbers, 
	multiply as multiplyTwoNumbers 
};
```

## Renomeando as Importações

main.js

```js
import { sum as s, multiply as mult } from "./calc.js"

console.log("4 + 6 =", s(4, 6));
console.log("4 * 6 =", mult(4, 6));
```

calc.js

```js
function sum(a, b) {
	return a + b;
};

function multiply(a, b) {
	return a * b;
};

export { sum, multiply };
```

## Usando Classes nos Módulos

main.js

```js
import { Calc } from "./calc.js"

const calc = new Calc();

console.log("4 + 6 =", calc.sum(4, 6));
console.log("4 * 6 =", calc.multiply(4, 6));
```

calc.js

```js
export class Calc {
	sum(a, b) {
		return a + b;
	};

	multiply(a, b) {
		return a * b;
	};
};
```
