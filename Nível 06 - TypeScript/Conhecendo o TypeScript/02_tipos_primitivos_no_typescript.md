# Tipos Primitivos no TypeScript

---

## Tipos Primitivos

```ts
// String para texto.
let username: string

username = "Rodrigo"
// username = 17
// username = true

// Number para número.
let total: number
total = 3
total = 7.5

// Boolean para verdadeiro ou falso.
let isLoading: boolean
isLoading = true
isLoading = false
```

## Inferência de Tipos e Tipagem Explícita

```ts
// Tipagem explicita
let myName: string

myName = "Rodrigo Gonçalves"

// Inferência de Tipos
let message = "Oi, tudo bem?"
message = "Sim. Tudo ótimo!"
```

## Tipo Any

```ts
let message: any

// Com o tipo any a variável aceita qualquer valor.
message = "Esse é um texto..."
message = 45
message = true
```

## Tipagem em Arrays

```ts
// Tipagem Explicita ou Anotação de Tipo (Type Annotation).
let names: string[] = ["Rodrigo", "Mayk"]
let numbers: number[] = [1, 2, 3, 4, 5]

// Inferência de Tipo.
let products = ["Product x", "Product y", "Product z"]
```

## Tipagem em Funções

```ts
function sum(x: number, y: number): number {
    const result = x + y
    console.log("Resultado = " + result)
    
    return x = y
}

const result = sum(7, 3)

const showMessage = (name: string): string => {
    const message = "Olá " + name
    
    return message
} 

showMessage("Rodrigo Gonçalves")
```

## Tipagem em Objetos

```ts
let user: { name: string, age: number, avatarUrl?: string } = { name: "Rodrigo", age: 12 }

/*
function signIn(email: string, password: string) {
    // Lógica de conectar o usuário na aplicação.
}

signIn("rodrigo@email.com", "123")
*/

function signIn({ email, password }: { email: string, password: string }) {
    // Lógica de conectar o usuário na aplicação.
    console.log("Usuário " + email + " conectado")
}

signIn({ email: "rodrigo@email.com", password: "123" })

function signIn2(data: { email: string, password: string }) {
    // Lógica de conectar o usuário na aplicação.
    console.log("Usuário " + data.email + " conectado")
}

signIn2({ email: "rodrigo@email.com", password: "123" })
```

## Null e Undefined

```ts
// undefined
let value: number
value = 12
console.log(value)

let user = {
    name: "Rodrigo"
}

// console.log(user.email)

// null
let email = null
console.log(email)

if(!email) {
    console.log("Informe o e-mail")
}
```

## Union Types

```ts
let response: string | null

response = "Teste"
response = null
```
