# Utilitários de Tipos

---

## Partial

```ts
interface User {
    id: number,
    name: string,
    email: string
}

const newUser: User = { id: 1, name: "Rodrigo", email: "rodrigo@email.com" }

const updatedUser: Partial<User> = { name: "Rodrigo Gonçalves" }
```

## Pick

```ts
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

interface BookPreview {
    title: string
}

const book1: BookPreview = { title: "TypeScript" }
const book2: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 150 }
```

## Omit

```ts
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

const book: Omit<Book, "description" | "pages"> = { title: "TypeScript", author: "Rodrigo" }
```

## Record

```ts
// Cria um objeto onde todas as chaves são strings e os valores são números.
const scores: Record<string, number> = {
    "Rodrigo": 10,
    "Mayk": 15
}

// Limitar valores.
type Profile = "admin" | "user" | "guest"

const user: Record<Profile, number> = {
    "admin": 1,
    "guest": 2,
    "user": 3
}

// Objetos personalizados.
interface User {
    name: string,
    email: string
}

const users: Record<number, User> = {
    1: { name: "Rodrigo", email: "rodrigo@email.com" },
    2: { name: "Mayk", email: "mayk@email.com" }
}
```

## Typeof

```ts
interface Product {
    id: number
    name: string
    quantity: number
}

const product1: Product = { id: 1, name: "Produto 1", quantity: 3 }

const product2: typeof product1 = { id: 2, name: "Produto 2", quantity: 5 }
```

## Keyof

```ts
const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg",
}

type Icon = typeof icons

const icon: keyof Icon = "add"
```
