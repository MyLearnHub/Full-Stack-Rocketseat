# Falsy e Truthy

---

FALSY quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops).

```js
console.log("### EXEMPLOS DE FALSY ###");
console.log(false ? "VERDADEIRO" : "FALSO");
console.log(0 ? "VERDADEIRO" : "FALSO");
console.log(-0 ? "VERDADEIRO" : "FALSO");
console.log("" ? "VERDADEIRO" : "FALSO");
console.log(null ? "VERDADEIRO" : "FALSO");
console.log(undefined ? "VERDADEIRO" : "FALSO");
console.log(NaN ? "VERDADEIRO" : "FALSO");

console.log("### EXEMPLOS DE TRUTHY ###");
console.log(true ? "VERDADEIRO" : "FALSO");
console.log({} ? "VERDADEIRO" : "FALSO");
console.log([] ? "VERDADEIRO" : "FALSO");
console.log(1 ? "VERDADEIRO" : "FALSO");
console.log(3.23 ? "VERDADEIRO" : "FALSO");
console.log("0" ? "VERDADEIRO" : "FALSO");
console.log(" " ? "VERDADEIRO" : "FALSO");
console.log("Rodrigo" ? "VERDADEIRO" : "FALSO");
console.log("false" ? "VERDADEIRO" : "FALSO");
console.log(-1 ? "VERDADEIRO" : "FALSO");
console.log(Infinity ? "VERDADEIRO" : "FALSO");
console.log(-Infinity ? "VERDADEIRO" : "FALSO");
```
