# Data e Hora

---

## Obtendo a Data e a Hora

```js
// Exibe a data e hora atual
console.log(new Date());

// Exibe a data e hora de referência (considera o fuso)
console.log(new Date(0));

// Exibe o número de milissegundos
console.log(new Date().getTime());
```

## Definindo uma data e uma hora específica

```js
// Define com ano, mês (0-11), dia
console.log(new Date(2024, 6, 3));

// Define ano, mês (0-11) e dia e hora, minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0));

// Definindo data e hora com String 
console.log(new Date("2024-07-03T14:30:00"));
console.log(new Date("July 3, 2032 13:30:33"));
```

## Métodos Para Trabalhar com Data e Hora

```js
let date = new Date("2024-07-02T14:30:10");

// Dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDay());

// Dia do mês (0 à 30)
console.log(date.getDate());

// Mês (0 à 11)
console.log(date.getMonth() + 1);

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());
```

## Modificando Uma Data e Uma Hora

```js
let date = new Date("July 3, 2024 14:30:00");

// Modificar o ano
date.setFullYear(2030);

// Modificar o mês (começa com 0)
date.setMonth(1);

// Modificar o dia
date.setDate(10);

// Modificar a hora
date.setHours(18);

// Modificar o minuto
date.setMinutes(15);

// Modificar o segundo
date.setSeconds(30);

console.log(date);
```

## Formatando Uma Data e Uma Hora

```js
let date = new Date("2024-07-02T14:30:00");

// Formata para o dia sempre ter 2 dígitos
let day = date.getDate().toString().padStart(2, "0");
console.log(day);

// Formata para o mês sempre ter 2 dígitos
let month = (date.getMonth() + 1).toString().padStart(2, "0");
console.log(month);

let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`);
```

## Convertendo Uma Data Para String

```js
let date = new Date("2024-07-02T14:30:00");

// Converte para String
console.log(date.toString());

// Retorna somente a data
console.log(date.toDateString());

// Retorna somente a hora
console.log(date.toTimeString());
```

## Exibindo Data e Hora Formatadas de Acordo Com a Localidade

```js
let date = new Date("2024-07-02T14:30:15");

// Exibe a data e hora no formato local
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en"));
console.log(date.toLocaleTimeString("en"));
```

## Usando o toLocaleString()

```js
let date = new Date("2024-07-02T14:30:10");

console.log(date.toLocaleString());

console.log(date.toLocaleString("en"));

// Exibe a data e hora em styles diferentes
console.log(
	date.toLocaleString("pt-BR", {
		dateStyle: "short",
	})
);

console.log(
	date.toLocaleString("pt-BR", {
		dateStyle: "long",
	})
);

console.log(
	date.toLocaleString("pt-BR", {
		dateStyle: "medium",
	})
);

console.log(
	date.toLocaleString("pt-BR", {
		dateStyle: "full",
	})
);

console.log(
	date.toLocaleString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	})
);

let amount = 12.5;
console.log(
	amount.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	})
);
```

## Aprendendo Sobre Fuso Horário

![image.png](assets/aula05-1.png)

![image.png](assets/aula05-2.png)

![image.png](assets/aula05-3.png)

## Conhecendo a Intl

Intl é a API de Internacionalização do ECMAScript.

```js
// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

const date = new Date();

// Obtém a diferença em minutos do timezone
console.log(date.getTimezoneOffset());

// Obtém a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60);
```

## Criando Uma Data e Hora Com Fuso Horário

```js
const dateWithTimezone = new Date("2023-12-13T22:56:30.603-03:00");
// console.log(dateWithTimezone.toISOString());

console.log(new Date().toLocaleString());
console.log(dateWithTimezone.toLocaleString());
```
