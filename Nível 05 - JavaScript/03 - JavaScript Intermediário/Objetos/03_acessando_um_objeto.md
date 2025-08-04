# Acessando um Objeto

---

```js
const user = {
  email: "rodrigo@email.com",
  age: 18,
  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves",
  },
  address: {
    street: "Rua x",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123",
  },
  message: function () {
    console.log("Oi Rodrigo");
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

// Acessando propriedade de objetos.
console.log(user.name.first_name);

// Executa o método do objeto.
user.message();

// Notação de colchetes.
console.log(user["email"]);
console.log(user["name"]["first_name"]);
user["message"]();
```
