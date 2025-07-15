# Scope

---

```js
// console.log(user);
// var user = "Rodrigo";

// Hoisting
var user;
console.log(user);

// Escopo global
var email = "joao@email.com";

{
	// Escopo de bloco
	console.log(email);
}

{
  // var age = 18;
  let age = 18;
}

console.log(age);

let address = "Rua X";

{
	address = "Rua Y";
	console.log(address);
}
```