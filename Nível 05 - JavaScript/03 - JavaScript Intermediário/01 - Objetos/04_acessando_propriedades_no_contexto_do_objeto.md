# Acessando Propriedades no Contexto do Objeto

---

```js
const user = {
	name: "João",
	email: "rodrigo@email.com",
	message: function() {
		// console.log(`Olá ${user.name}`);
		console.log(`Olá ${this.name}`);
	},
};

user.message();
```
